package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Car;
import com.RentalSystem.CarRentalSystem.Entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
@Service
public class ReservationQuery {
    public List<Reservation> getReservations(JdbcTemplate jdbc)
    {
        String sql="select * from reservation";
        List reservations= jdbc.queryForList(sql);
        return reservations;
    }
    public Reservation selectReservationByReservationNumber(int reservationNumber,JdbcTemplate jdbc)
    {
        String sqlres="select * from reservation where reservation_number=?";
         Reservation reservation=(Reservation) jdbc.queryForObject(
                                sqlres,
                                new Object[]{reservationNumber},
                                new BeanPropertyRowMapper(Reservation.class));
        return reservation;
    }
    public String reserve(Reservation reservation,JdbcTemplate jdbc) throws ParseException {
        CarQuery carquery= new CarQuery();
        Car carToBeReserved=carquery.selectCarByID(reservation.getPlate_id(),jdbc);
        String sqlReserve="insert into reservation(user_id,plate_id,pickup_date,return_date,status,payment) VALUES (?,?,?,?,?,?)";
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        String pickUpDatestr = date.format(reservation.getPickup_date());
        Date pickup = date.parse(pickUpDatestr);
        String returnDatestr = date.format(reservation.getReturn_date());
        Date returndate = date.parse(returnDatestr);
        float payment=(returndate.getDate()-pickup.getDate())*carToBeReserved.getRate();
        reservation.setPayment(payment);
        reservation.setStatus("reserved");
        int res=jdbc.update(sqlReserve,reservation.getUser_id(),reservation.getPlate_id(),reservation.getPickup_date(),reservation.getReturn_date(),reservation.getStatus(),reservation.getPayment());
        if(res>0)
        {
            return "Reservation Accepted";
        }
        return "Failed to reserve";
    }
    public String pickupCar(int reservation,JdbcTemplate jdbc)
    {
        String sqlpickup="update reservation set status=? where reservation_number=?";
        if(jdbc.update(sqlpickup,"picked up",reservation)>0)
        return "Have a nice Ride";

        return "Pickup Failed";
    }
    public String returnCar(int reservation,JdbcTemplate jdbc)
    {
        System.out.println(reservation);
        float reservationPayment=selectReservationByReservationNumber(reservation,jdbc).getPayment();
        if(reservationPayment>0)
        {
            return "U have to pay your Reservation fees : "+reservationPayment;
        }
        else
        {
            String sqldelete="delete from reservation where reservation_number=?";
            jdbc.update(sqldelete,reservation);
            return "We hope u had I nice Ride :)";
        }
    }

    public String payForCar(int reservation,JdbcTemplate jdbc)
    {

            String sqldelete="update reservation set payment=? where reservation_number=?";
            jdbc.update(sqldelete,0,reservation);
            return "Paid Successfully :)";

    }
}

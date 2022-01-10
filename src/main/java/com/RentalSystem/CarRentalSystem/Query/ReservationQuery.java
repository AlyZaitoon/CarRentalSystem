package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Car;
import com.RentalSystem.CarRentalSystem.Entities.Reservation;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
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

    public List<Reservation> selectReservationByUserId(int user_id,JdbcTemplate jdbc)
    {
        String sqlres="select * from reservation where user_id="+user_id;
        List<Reservation> reservations = jdbc.query(sqlres, new Object[]{}, new BeanPropertyRowMapper<Reservation>(Reservation.class));

        return reservations;
    }

    public boolean validationDate(Reservation reservation,JdbcTemplate jdbc) throws ParseException {
         String sql="select * from reservation where plate_id="+ reservation.getPlate_id();

        List<Reservation> reservations = jdbc.query(sql, new Object[]{}, new BeanPropertyRowMapper<Reservation>(Reservation.class));
        boolean Valid=true;

        LocalDate ReservationPickup=LocalDate.parse(reservation.getPickup_date());
        LocalDate ReservationReturn=LocalDate.parse(reservation.getReturn_date());


        for( Reservation reserve:reservations)
        {
            LocalDate d1 = LocalDate.parse(reserve.getPickup_date());
            LocalDate d2 = LocalDate.parse(reserve.getReturn_date());
            if(ReservationPickup.compareTo(d1)>0 && ReservationPickup.compareTo(d2)<0)
            {
                 Valid =false;
                 break;
            }
            else if(ReservationReturn.compareTo(d1)>0 && ReservationReturn.compareTo(d2)<0)
            {
                Valid =false;
                break;
            }
            else if(ReservationPickup.equals(d2))
            {
                Valid =false;
                break;
            }
            else if(ReservationReturn.equals(d2))
            {
                Valid =false;
                break;
            }
        }
        return Valid;
    }
    long getDays(String pickupDate, String returnDate) throws ParseException {

        LocalDate d1 = LocalDate.parse(pickupDate);

        LocalDate d2 = LocalDate.parse(returnDate);
        System.out.println(d1.getDayOfMonth());
        System.out.println(d2.getDayOfMonth());
        System.out.println(d1.getMonthValue());
        System.out.println(d2.getDayOfMonth());
        int difference_In_Days
                =  (d2.getDayOfMonth()- d1.getDayOfMonth())+(d2.getMonthValue()- d1.getMonthValue())*30;
        System.out.println(difference_In_Days);

        return difference_In_Days;
    }
    public String reserve(Reservation reservation,JdbcTemplate jdbc) throws ParseException {
        int year,month,day;
        CarQuery carquery= new CarQuery();
        Car carToBeReserved=carquery.selectCarByID(reservation.getPlate_id(),jdbc);
        String sqlReserve="insert into reservation(user_id,plate_id,pickup_date,return_date,status,payment) VALUES (?,?,?,?,?,?)";

        boolean reserves=validationDate(reservation,jdbc);

        if(!reserves)
        {
            return "Invalid Dates choice";
        }

        float payment=getDays(reservation.getPickup_date(),reservation.getReturn_date())*carToBeReserved.getRate();
        reservation.setPayment(payment);
        reservation.setStatus("reserved");
        int res=jdbc.update(sqlReserve,reservation.getUser_id(),reservation.getPlate_id(),reservation.getPickup_date(),reservation.getReturn_date(),reservation.getStatus(),reservation.getPayment());
        if(res>0)
        {
            return "Reservation Accepted";
        }
        return "Invalid Pick-up date";
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

    public List<Reservation> FullReport(JdbcTemplate jdbc)
    {
        String sql="select * from customer as c1 join Reservation as r1 on c1.customer_id=r1.user_id join car as c2 on r1.plate_id = c2.plate_id";
        List reservations= jdbc.queryForList(sql);
        return reservations;
    }

    public List<Reservation> CarReserve(JdbcTemplate jdbc)
    {
        String sql="select * from  Reservation as r1 join car as c2 on r1.plate_id = c2.plate_id";
        List reservations= jdbc.queryForList(sql);
        return reservations;
    }
}

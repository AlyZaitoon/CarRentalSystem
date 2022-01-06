package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Car;
import com.RentalSystem.CarRentalSystem.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;
@Service
public class CarQuery {
//    @GetMapping(value="/getCars")
    public List<Car> getCars(JdbcTemplate jdbc)
    {

        String sql="select * from car";
        List cars= jdbc.queryForList(sql);
        return cars;
    }
    public Car selectCarByID(String plate_id,JdbcTemplate jdbc)
    {
        String sqlcar="select * from car where plate_id=?";
        return (Car) jdbc.queryForObject(
                sqlcar,
                new Object[]{plate_id},
                new BeanPropertyRowMapper(Car.class));


    }

    public  String addCar(Car car, JdbcTemplate jdbc)
    {
        String sqlUser="insert into car VALUES ('"+ car.getPlate_id() + "','" + car.getType()+ "','" + car.getModel()+"','" + car.getColor()+"','"+car.getYear()+"','"+car.getStatus()+"','"+car.getRate()+ "')";
        int result = jdbc.update(sqlUser);
        if(result>0)
            return "Inserted Succefully";
        return "Failed check blanks inputs or choose a different id";
    }

    public  String updateCar(Car car,JdbcTemplate jdbc)
    {
        String sql="update car set status = ?  where plate_id =?";
        if(car.getStatus()!=null && car.getPlate_id()!=null) {
            int result =jdbc.update(sql, car.getStatus(), car.getPlate_id());
            if(result>0)
                return  "Record Updated Successfully";
            return "Record NOT Found";
        }
        else  if(car.getStatus()==null)
            return "status Field is Blank ";
        else if(car.getPlate_id()==null)
            return "plate_id Field is blank";
        else return "BOTH FIELDS ARE BLANK  !!!!!";
    }

    public String deleterCar(String plate,JdbcTemplate jdbc)
    {
        if(plate!=null) {
            String sql = "delete from car where plate_id=" + plate;
            int result= jdbc.update(sql);
            if(result>0)
                return "Deleted Successfully";
            return "Record Not Found";
        }
        return "Blank Id";}


}

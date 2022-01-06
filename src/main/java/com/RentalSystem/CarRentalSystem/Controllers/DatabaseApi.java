package com.RentalSystem.CarRentalSystem.Controllers;

import com.RentalSystem.CarRentalSystem.Entities.*;
import com.RentalSystem.CarRentalSystem.Query.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.mysql.cj.xdevapi.JsonArray;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController

@CrossOrigin(value = "http://localhost:3000/")
public class DatabaseApi {
    @Autowired
    private  UserQuery userQuery;
    @Autowired
    private CarQuery carQuery;
    @Autowired
    private AdminQuery adminQuery;
    @Autowired
    private ReservationQuery reservationQuery;
    @Autowired
    private CustomerQuery customerQuery;

    @Autowired
    private  JdbcTemplate jdbc;


//*************************************************************************************************************************************

    @GetMapping(value="/getUsers")
    public List<User> getUsers()
    {

       return userQuery.getUsers(jdbc);
    }
    @GetMapping(value="/getCars")
    public List<Car> getCars()
    {

        return carQuery.getCars(jdbc);
    }
    @GetMapping(value="/getCustomers")
    public List<Customer> getCustomers()
    {

        return customerQuery.getCustomers(jdbc);
    }
    @GetMapping(value="/getReservations")
    public List<Reservation> getReservations()
    {

        return reservationQuery.getReservations(jdbc);
    }

    @PostMapping(value = "/addUser")
    public String addUser (@RequestBody User user)
    {
        String ret=this.userQuery.addUser(user,jdbc);
        return ret;

    }
    @PostMapping(value = "/updateUser")
    public String  updateUser (@RequestBody User user )
    {
       return this.userQuery.updateUser(user,jdbc);
    }

    @PostMapping(value = "/deleteUser")
    public String  deleteUser (@RequestBody User user )
    {
      return   this.userQuery.deleterUser(user.getUser_id(),jdbc);
    }

//*******************************************************************************************************************************************


    @PostMapping(value = "/addCustomer")
    public String addCustomer (@RequestBody Customer customer)
    {
        String ret;
        ret=this.customerQuery.addCustomer(customer,jdbc);
        return ret;
    }

    @PostMapping(value = "/updateCustomer")
    public String updateCustomer (@RequestBody Customer customer)
    {
        String ret;
        ret=this.customerQuery.updateCustomer(customer,jdbc);
        return ret;
    }

    @PostMapping(value = "/deleteCustomer")
    public String deleteCustomer (@RequestBody Customer customer)
    {
        return this.userQuery.deleterUser(customer.getCustomer_id(),jdbc);
    }


//*******************************************************************************************************************************************
@PostMapping(value = "/addAdmin")
public String addAdmin (@RequestBody Admin admin)
{
    String ret;
    ret=this.adminQuery.addAdmin(admin,jdbc);
    return ret;
}

    @PostMapping(value = "/deleteAdmin")
    public String deleteAdmin (@RequestBody Admin admin)
    {
        String ret;
        ret=this.adminQuery.deleteAdmin(admin.getAdmin_id(),jdbc);
        return ret;
    }
//*******************************************************************************************************************************************
@PostMapping(value = "/addCar")
public String addCar (@RequestBody Car car)
{
    String ret;
    ret=this.carQuery.addCar(car,jdbc);
    return ret;
}

    @PostMapping(value = "/updateCar")
    public String updateCar (@RequestBody Car car)
    {
        String ret;
        ret=this.carQuery.updateCar(car,jdbc);
        return ret;
    }

    @PostMapping(value = "/deleteCar")
    public String deleteCar (@RequestBody Car car)
    {
        return this.carQuery.deleterCar(car.getPlate_id(),jdbc);
    }
//*******************************************************************************************************************************************
    @PostMapping(value = "/reserveCar")
    public String reserveCar(@RequestBody Reservation reservation) throws ParseException {
        return this.reservationQuery.reserve(reservation,jdbc);
    }
    @PostMapping(value = "/pickupCar")
    public String pickUpCar(@RequestParam(value = "resNo") int reservation)  {

        return this.reservationQuery.pickupCar(reservation,jdbc);
    }
    @PostMapping(value = "/returnCar")
    public String returnCar(@RequestParam(value = "resNo") int reservation)  {
        System.out.println(reservation);
        return this.reservationQuery.returnCar(reservation,jdbc);
    }
    @PostMapping(value = "/payForCar")
    public String payForCar(@RequestParam(value = "resNo") int reservation)  {
        return this.reservationQuery.payForCar(reservation,jdbc);
    }


//    @GetMapping(value = "/cars")
//    public List<Car> availableCar(@RequestBody Car car)
//    {
//        String Query="";
//        int firstAtt=0;
//        int i=0;
//
//                if(car.getPlate_id()!=null)
//                {
//                    Query+="c.plate_id="+car.getPlate_id();
//                    firstAtt=1;
//                }
//
//                else if(car.getColor()!=null)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.color = "+car.getColor();
//                    firstAtt=1;
//                }
//                if(car.getModel()!=null)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.model="+car.getModel();
//                    firstAtt=1;
//                }
//
//                if(car.getRate()!=0)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.rate="+Float.toString(car.getRate());
//                    firstAtt=1;
//                }
//
//                if(car.getStatus()!=null)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.status="+car.getStatus();
//                    firstAtt=1;
//                }
//
//                if(car.getType()!=null)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.type="+car.getType();
//                    firstAtt=1;
//                }
//
//                if(car.getYear()!=null)
//                {
//                    if(firstAtt==1) Query+=" and ";
//                    Query+="c.year="+car.getYear().toString();
//                    firstAtt=1;
//                }
//
//        System.out.println(Query);
////        return carRepo.selectCars(Query);
//return null;
//}


//    @PostMapping(value ="/reserve")
//    public void reserveCar(@RequestBody Reservation reserve)
//    {
//
//        Car car=carRepo.selectCarById(reserve.getPlate_id());
//        float payment=car.getRate()*(reserve.getReturn_date().getDate()-reserve.getPickup_date().getDate());
//        reserveRepo.reserve(reserve.getUser_id(),reserve.getPlate_id(),reserve.getPickup_date(),reserve.getReturn_date(),"Reserved",payment);
//    }
}

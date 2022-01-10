package com.RentalSystem.CarRentalSystem.Entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.util.Date;

@Entity
@IdClass(ReserveId.class)
public class Reservation {

    @Column
    private int reservation_number;
    @Column
    private  int user_id;

    @Id
    private  String plate_id;

    @Id
    private String pickup_date;

    @Column
    private String return_date;

    @Column
    private String status;

    @Column
    private float payment;



    public int getReservationNumber() {
        return reservation_number;
    }

    public void setReservationNumber(int reservationNumber) {
        this.reservation_number = reservationNumber;
    }





    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getPlate_id() {
        return plate_id;
    }

    public void setPlate_id(String plate_id) {
        this.plate_id = plate_id;
    }

    public int getReservation_number() {
        return reservation_number;
    }

    public void setReservation_number(int reservation_number) {
        this.reservation_number = reservation_number;
    }

    public String getPickup_date() {
        return pickup_date;
    }

    public void setPickup_date(String pickup_date) {
        this.pickup_date = pickup_date;
    }

    public String getReturn_date() {
        return return_date;
    }

    public void setReturn_date(String return_date) {
        this.return_date = return_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public float getPayment() {
        return payment;
    }

    public void setPayment(float payment) {
        this.payment = payment;
    }
}


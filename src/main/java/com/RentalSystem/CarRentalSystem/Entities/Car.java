package com.RentalSystem.CarRentalSystem.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.crypto.Data;
import java.util.Date;

@Entity
public class Car {

    @Id
    private String plate_id;

    @Column
    private  String type ;

    @Column
    private  String model ;

    @Column

    private String year;

    @Column

    private String car_status;

    @Column
    private float rate;

    @Column
    private String color;

    @Column
    private String img;

    public String getCar_status() {
        return car_status;
    }

    public void setCar_status(String car_status) {
        this.car_status = car_status;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Car() {
    }



    public String getPlate_id() {
        return plate_id;
    }

    public void setPlate_id(String plate_id) {
        this.plate_id = plate_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getStatus() {
        return car_status;
    }

    public void setStatus(String status) {
        this.car_status = status;
    }

    public float getRate() {
        return rate;
    }

    public void setRate(float rate) {
        this.rate = rate;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

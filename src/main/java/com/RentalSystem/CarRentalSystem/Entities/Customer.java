package com.RentalSystem.CarRentalSystem.Entities;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Customer {

    @Id
    private int customer_id;

    @Column
    private  String fname ;

    @Column
    private String sex;

    @Column
    private String bdate;

    @Column
    private String phone;



    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {

        this.customer_id = customer_id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBdate() {
        return bdate;
    }

    public void setBdate(String bdate) throws ParseException {

        this.bdate = bdate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
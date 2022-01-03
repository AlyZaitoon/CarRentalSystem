package com.RentalSystem.CarRentalSystem.Entities;

import org.apache.tomcat.jni.User;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Admin {

    @Id
    private int admin_id;

    @Column
    private  String fname ;

    @Column
    private String sex;

    @Column
    private Date bdate;

    @Column
    private String phone;

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
//        super.setUser_id(admin_id);
        this.admin_id = admin_id;
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

    public Date getBdate() {

        return bdate;
    }

    public void setBdate(Date bdate) throws ParseException {
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = date.format(bdate);
        this.bdate = date.parse(dateStr);
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

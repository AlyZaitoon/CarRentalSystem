package com.RentalSystem.CarRentalSystem.Entities;

import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;

@Entity
@Table(name = "user",schema = "carrentalsystem")
public class User  {
    @Id
    private int user_id;
    @Column
    private  String password ;

    @Column
    private String type;


    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }



}

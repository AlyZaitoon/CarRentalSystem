package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Customer;
import com.RentalSystem.CarRentalSystem.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserQuery {



    public  String addUser(User user, JdbcTemplate jdbc)
    {
        String sqlUser="insert into user VALUES ('"+ user.getUser_id() + "','" + user.getPassword()+ "','" + user.getType()+ "')";
        int result = jdbc.update(sqlUser);
        if(result>0)
            return "Inserted Succefully";
        return "Failed check blanks inputs or choose a different id";
    }

    public  String updateUser(User user,JdbcTemplate jdbc)
    {
        String sql="update user set password = ? ,type = ? where user_id =?";
        if(user.getPassword()!=null && user.getType()!=null) {
            int result =jdbc.update(sql, user.getPassword(), user.getType(), user.getUser_id());
            if(result>0)
            return  "Record Updated Successfully";
            return "Record NOT Found";
        }
        else  if(user.getPassword()==null)
            return "Password Field is Blank ";
        else if(user.getType()==null)
            return "Type Field is blank";
        else return "BOTH FIELDS ARE BLANK  !!!!!";
    }

    public String deleterUser(int user,JdbcTemplate jdbc)
    {
        if(user!=0) {
            String sql = "delete from User where user_id=" + user;
           int result= jdbc.update(sql);
           if(result>0)
        return "Deleted Successfully";
           return "Record Not Found";
        }
        return "Blank Id";
    }



}
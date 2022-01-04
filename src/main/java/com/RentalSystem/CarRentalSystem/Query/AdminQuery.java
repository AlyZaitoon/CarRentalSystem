package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Admin;
import com.RentalSystem.CarRentalSystem.Entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class AdminQuery {
    public  String addAdmin(Admin admin, JdbcTemplate jdbc)
    {
        String sqlCust="insert into admin VALUES ('"+admin.getAdmin_id() +"','" + admin.getFname() +"','" +admin.getSex() + "','" + admin.getBdate() +"','" + admin.getPhone() +"')";

        int result = jdbc.update(sqlCust);
        if(result>0)
            return "Inserted Succefully";
        return "Failed check blanks inputs or choose a different id";
    }

    public String deleteAdmin(int admin,JdbcTemplate jdbc)
    {
        if(admin!=0) {
            String sql = "delete from admin where admin_id=" + admin;
            int result= jdbc.update(sql);
            if(result>0)
                return "Deleted Successfully";
            return "Record Not Found";
        }
        return "Blank Id";
    }

}

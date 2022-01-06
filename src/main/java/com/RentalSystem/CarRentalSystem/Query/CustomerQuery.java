package com.RentalSystem.CarRentalSystem.Query;
import com.RentalSystem.CarRentalSystem.Entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerQuery {
    public List<Customer> getCustomers(JdbcTemplate jdbc)
    {

        String sql="select * from customer";
        List customers= jdbc.queryForList(sql);
        return customers;
    }
    public  String addCustomer(Customer customer, JdbcTemplate jdbc)
    {
        String sqlCust="insert into customer VALUES ('"+customer.getCustomer_id() +"','" + customer.getFname() +"','" +customer.getSex() + "','" + customer.getBdate() +"','" + customer.getPhone() +"')";

        int result = jdbc.update(sqlCust);
        if(result>0)
            return "Inserted Succefully";
        return "Failed check blanks inputs or choose a different id";
    }

    public String updateCustomer(Customer customer,JdbcTemplate jdbc)
    {
        String sql="update customer set fname = ? ,phone = ? where customer_id =?";
        if(customer.getFname()!=null && customer.getPhone()!=null) {
            int result =jdbc.update(sql, customer.getFname(), customer.getPhone(), customer.getCustomer_id());
            if(result>0)
                return  "Record Updated Successfully";
            return "Record NOT Found";
        }
        else  if(customer.getFname()==null)
            return "Fname Field is Blank ";
        else if(customer.getPhone()==null)
            return "Phone Field is blank";
        else return "BOTH FIELDS ARE BLANK  !!!!!";
    }

    public String deleteCustomer(int customer,JdbcTemplate jdbc)
    {
        if(customer!=0) {
            String sql = "delete from Customer where customer_id=" + customer;
            int result= jdbc.update(sql);
            if(result>0)
                return "Deleted Successfully";
            return "Record Not Found";
        }
        return "Blank Id";
    }

}

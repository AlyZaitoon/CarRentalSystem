import axios from 'axios'
const Customers_GET_REST_API_URL = 'http://localhost:8080/getCustomers';
const Customer_UPDATE_REST_API_URL = 'http://localhost:8080/updateCustomer';

class CustomerService{

getCustomers()
{
    return axios.get(Customers_GET_REST_API_URL).then(d => d.data);

}

UpdateCustomer(customer)
{
    axios.post(Customer_UPDATE_REST_API_URL,customer);
}

}

export default new CustomerService() 
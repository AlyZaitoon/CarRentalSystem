import axios from 'axios'
const REGUSERS_REST_API_URL = 'http://localhost:8080/addUser';
const REGCUSTOMERS_REST_API_URL = 'http://localhost:8080/addCustomer';

class RegisterService
{

    
    // axios.post('https://reqres.in/api/articles', article, { headers })
    //     .then(response => this.setState({ articleId: response.data.id }));
    registerUser(user)
    {   
        
        axios.post(REGUSERS_REST_API_URL,user);
    }
    
    registerCustomer(customer)
    {
        axios.post(REGCUSTOMERS_REST_API_URL,customer);
    }

}

export default new RegisterService()
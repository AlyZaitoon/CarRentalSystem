
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/getUsers';

class LoginService {

    async getUsers(){
       var users= await axios.get(USERS_REST_API_URL);
        return users;
    }
}

export default new LoginService();
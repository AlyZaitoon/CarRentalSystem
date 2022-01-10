import data from "../Components/data";
import axios from 'axios'

const CARS_REST_GET_API_URL = 'http://localhost:8080/getCars';
const CARS_REST_ADD_API_URL = 'http://localhost:8080/addCar';
const CARS_REST_UPDATE_API_URL = 'http://localhost:8080/updateCar';

class CarService {


     getCars() {
        return axios.get(CARS_REST_GET_API_URL).then(d => d.data);
     }
     
    

    addCar(car)
    {   
        axios.post(CARS_REST_ADD_API_URL,car);
    }
     

    updateCar(car)
    {
        axios.post(CARS_REST_UPDATE_API_URL,car);
    }
}
export default new CarService()
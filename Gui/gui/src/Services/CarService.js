import data from "../Components/data";
import axios from 'axios'

const CARS_REST_API_URL = 'http://localhost:8080/getCars';
class CarService {

   
    // async getCars() {
    //    var cars=await axios.get(CARS_REST_API_URL);
    //     // console.log(cars)
    //     return cars.data;
    //     //fetch('data/products.json').then(res => res.json()).then(d => d.data);
       
    // }

     getCars() {
        
         // return cars;
         //fetch('data/products.json').then(res => res.json()).then(d => d.data);
        //  axios.get(CARS_REST_API_URL).then(data =>{
        //      console.log(data)
        //  });
        return axios.get(CARS_REST_API_URL).then(d => d.data);
     }
    
}
export default CarService
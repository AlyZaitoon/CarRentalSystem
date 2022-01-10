import axios from 'axios'
const RERESERVE_REST_API_URL = 'http://localhost:8080/reserveCar';
const GET_RERSERVATIONS_REST_API_URL = 'http://localhost:8080/getReservations';
const GET_RESERVATIONCAR_REST_API_URL = 'http://localhost:8080/getReservationsCar';
const GET_FULLREPORT_REST_API_URL  ='http://localhost:8080/fullReport'
const GET_RESERVATIONBYID_REST_API_URL  ='http://localhost:8080/reservationById?user_Id='
const GET_PAYFOR_RESERVATION_API_URL  ='http://localhost:8080/payForCar?resNo='
const GET_RETURNCAR_RESERVATION_REST_API_URL  ='http://localhost:8080/returnCar?resNo='

class ReservationsService{

getReservations()
{
    return axios.get(GET_RERSERVATIONS_REST_API_URL).then(d => d.data);

}

Reserve(reservation)
{
    return axios.post(RERESERVE_REST_API_URL,reservation).then(d => d.data);
}




ReservationCar()
{
    return axios.get(GET_RESERVATIONCAR_REST_API_URL).then(d => d.data);

}

fullReport()
{
    return axios.get(GET_FULLREPORT_REST_API_URL).then(d => d.data);

}

getReservationbyID(user_id)
{
    return axios.get(GET_RESERVATIONBYID_REST_API_URL+user_id).then(d => d.data);

}
payForCar(res_no)
{
    return axios.post(GET_PAYFOR_RESERVATION_API_URL+res_no).then(d => d.data);

}
ReturnCar(res_no)
{
    return axios.post(GET_RETURNCAR_RESERVATION_REST_API_URL+res_no).then(d => d.data);

}



}
export default new  ReservationsService();
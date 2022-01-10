import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./for1.css"
import moment
 from "moment";
import { DataViewDemo } from "./Search";
import ReservationsService from "../Services/ReservationsService";
import data from "./data";
import { Button } from "primereact/button";

class Pickdates extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      user_id:window.Login.id,
      plate_id:window.Search.formDataplateId,
      pickup_date:'',
      return_date:'',
      data:''
    }
    this.service=ReservationsService
    
  }

  submit()
  {
    var pickup=document.getElementById("pickup date").value.trim()
    var returndate=document.getElementById("return date").value.trim()
    var d1=Date.parse(pickup)
    var d2=Date.parse(pickup)
    
    if(d2<d1)
    {
      alert("return date smaller than pickup date !!")
      return
    }
    var pickupflag =1
    var returnflag =1
    if(!moment(pickup, 'YYYY-MM-DD',true).isValid() )
        {   pickupflag=0;
            alert("Invalid Pickup Date");
        }

        if(!moment(returndate, 'YYYY-MM-DD',true).isValid() )
        {   returnflag=0;
            alert("Invalid return Date");
        }

        if(pickupflag==1&&returnflag==1)
        {
          this.state.pickup_date=pickup
          this.state.return_date=returndate
          
          this.service.Reserve(this.state).then((response) => {
            this.setState({ data: response})
            alert(response)
        });
         
        }



        window.App.changePage(<DataViewDemo/>)
  }

    render() {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <label className="form-label h4">Pick-up Date</label>
            <div className="col-12 mb-2 mx-auto">
              <label>Pick-up Date</label>
              <input type="text" className="form-control" id="pickup date" placeholder="yyyy-mm-dd" />
            </div>
            <div className="col-12 mb-2">
              <label>Return Date</label>
              <input type="text" className="form-control" id="return date" placeholder="yyyy-mm-dd" />
            </div>
            <div className="col-12 mb-2">
              <Button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</Button>
              <Button  className="btn btn-primary" onClick={ ()=>{window.App.changePage(<DataViewDemo/>)}}>Go Back</Button>
              
            </div>
            </div>
        </div>
      )
    }
  }
  
  export default Pickdates;
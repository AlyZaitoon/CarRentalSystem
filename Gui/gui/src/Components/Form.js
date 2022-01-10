import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./for.css"
import Header from "./Header";
import Login from "./Login";
import moment from 'moment'
import CarService from "../Services/CarService";


class Form extends Component {
  constructor(props)
    {
        super(props);
        this.Car={
            plate_id:'',
            type:'',
            model:'',
            color:'',
            year:'',
            status:'',
            rate:0,
            img:null
           
          }
    }

    validate(){
      console.log(document.getElementById('plateID'));
      var plate_id=document.getElementById('plateID').value.trim();
      var type=document.getElementById('type').value.trim();
      var Model=document.getElementById('model').value.trim();
      var Color=document.getElementById('color').value.trim();
      var Year=document.getElementById('year').value.trim();
      var Status=document.getElementById('status').value.trim();
      var Rate=document.getElementById('rate').value.trim();
      var img =document.getElementById("file").value

      if(plate_id==''||type==''||Model==''||Color==''||Year==''||Status==''||Rate=='')
      {alert(" Please Fill empty Fields");
        return 0;
      }  
      if(!moment(Year, 'YYYY-MM-DD',true).isValid() )
      {   
          alert("Invalid Date");
          return 0;
      }
      if(isNaN(Rate)||Rate==0)
      {
        alert("Invalid Rate")
        return 0;
      }
      


      this.Car.plate_id=plate_id
      this.Car.type=type
      this.Car.model=Model
      this.Car.color=Color
      this.Car.year=Year
      this.Car.status=Status
      this.Car.rate=Rate
      this.Car.img=img



    }
     
  //   getFile(filePath) {
  //     return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
  // }

  //  getoutput() {
  //     outputfile.value = getFile(inputfile.value);
  //     extension.value = inputfile.value.split('.')[1];
  // }
  
 
  addCar()
  {
    this.Car.img=document.getElementById("file").value
    this.validate()
    console.log(this.Car)
    CarService.addCar(this.Car)
    // window.App.changePage(<Login/>);
  }

  render() {
    return (
      <>
      <Header/>
      <div className="container">
        <div className="row justify-content-center">
          <label className="form-label h4">New Car</label>
          <div className="col-12 mb-2 mx-auto">
            <label  >Plate ID</label>
            <input   type="text" className="form-control" id="plateID" placeholder="Enter plateId" />
          </div>
          <div className="col-12 mb-2">
            <label  >Type</label>
            <input  type="text" className="form-control" id="type" placeholder="Enter type" />
          </div>
          <div className="col-12 mb-2">
            <label >Model</label>
            <input  type="text" className="form-control" id="model" placeholder="Enter model" />
          </div>
          <div className="col-12 mb-2">
            <label  >Color</label>
            <input  type="text" className="form-control" id="color" placeholder="Enter color" />
          </div>
          <div className="col-12 mb-2">
            <label >Year</label>
            <input   type="text" className="form-control" id="year" placeholder="Enter year YYYY-MM-DD" />
          </div>
          <div className="col-12 mb-2">
            <label >Status</label>
            <input   type="text" className="form-control" id="status" placeholder="Enter status" />
          </div>
          <div className="col-12 mb-2">
            <label  >Rate</label>
            <input  type="numeric" className="form-control" id="rate" placeholder="Enter rate" />
          </div>
          <div className="col-12 mb-2">
            <input  id="file"  type="file" className="form-control-file"/>
            {/* onChange={this.getoutput()} */}
            <button type="submit" className="btn btn-primary" onClick={()=>this.addCar()}>Add Car</button>
          </div>
          <div className="col-12 mb-2">
            
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Form;

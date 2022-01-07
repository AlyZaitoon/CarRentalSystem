import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./for.css"
import Header from "./Header";
import Login from "./Login";

class Form extends Component {
  
  addCar()
  {
    window.App.changePage(<Login/>);
  }

  render() {
    return (
      <>
      <Header/>
      <div className="container">
        <div className="row justify-content-center">
          <label className="form-label h4">New Car</label>
          <div className="col-12 mb-2 mx-auto">
            <label for="plateID">Plate ID</label>
            <input type="text" class="form-control" id="plateID" placeholder="Enter email" />
          </div>
          <div className="col-12 mb-2">
            <label for="type">Type</label>
            <input type="text" class="form-control" id="type" placeholder="Enter type" />
          </div>
          <div className="col-12 mb-2">
            <label for="model">Model</label>
            <input type="text" class="form-control" id="model" placeholder="Enter model" />
          </div>
          <div className="col-12 mb-2">
            <label for="color">Color</label>
            <input type="text" class="form-control" id="color" placeholder="Enter color" />
          </div>
          <div className="col-12 mb-2">
            <label for="year">Year</label>
            <input type="date" class="form-control" id="year" placeholder="Enter year" />
          </div>
          <div className="col-12 mb-2">
            <label for="status">Status</label>
            <input type="text" class="form-control" id="status" placeholder="Enter status" />
          </div>
          <div className="col-12 mb-2">
            <label for="rate">Rate</label>
            <input type="numeric" class="form-control" id="rate" placeholder="Enter rate" />
          </div>
          <div className="col-12 mb-2">
            <input type="file" className="form-control-file" id="file"/>
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

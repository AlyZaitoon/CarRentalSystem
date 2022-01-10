import axios from "axios";
import {useState,useEffect, Component} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter,numberFilter,customFilter,dateFilter,multiSelectFilter} from "react-bootstrap-table2-filter";
import Header from "./Header";
import ReservationsService from "../Services/ReservationsService";
import { DataViewDemo } from "./Search";

class Payment extends Component {
  constructor(props)
  {
    super(props);
    this.service= ReservationsService

    this.state={
      data:[]
    }
    this.payFormatter=(data,row) =>{
        console.log(row)
        
        return <>
              <div >
                  <button type="Submit" className="btn btn-primary " onClick={()=>this.PayForCar(row)}> Return and Pay</button>
              </div>
        </>
      }
    this.columns  = [{
        dataField:"reservation_number",
        text:"Reservation_no",
      },
      {
        dataField:"user_id",
        text:"User ID",
      },
      {
        dataField:"plate_id",
        text:"Plate ID",
      },
      {
        dataField:"pickup_date",
        text:"Pickup date",
      },
      {
        dataField:"return_date",
        text:"Return date",
      },
      {
        dataField:"status",
        text:"Status",
      },
    
      {
        dataField:"payment",
        text: "Payment",
      },
      {
        dataField:"pay",
        text: "Pay",
        formatter:this.payFormatter,
      },
      ]
  }

  componentDidMount(){
    this.service.getReservationbyID(window.Login.id).then((response) => {
        this.setState({ data: response})
        // console.log(this.state.data)
    });
}
  PayForCar(data){
    this.service.payForCar(data.reservation_number).then((response) => {
        
    });
    this.service.ReturnCar(data.reservation_number).then((response) => {
        
        // console.log(this.state.data)
    });
    this.componentDidMount()
    // this.render()
  }
  // useEffect(() =>{
  //   getData()
  // },[]);

  //    getData = () =>{
  //   axios.get("http://localhost:8080/getReservations").then(res=>{
  //   setData(res.data);
  //   console.log(res.data);
  //   //Appear data on table
  //   //res.data.forEach(obj,ind=>obj.__id=ind)
  // });
  //   //console.log(res.data)
  // };
// *****************************************************

// ******************************************************

   selectRow={ //makes checkboxes to select selected Row
    mode: "checkbox",
    clickToSelect:true,
    clickToEdit: true,
  };
   
render(){
  return (
<div>
    <div className="App">
      <BootstrapTable
      keyField ="id" 
      data={this.state.data} 
      columns={this.columns} 
      striped 
      hover 
      condensed 
   
      cellEdit={cellEditFactory({ //double click to edit selected
        blurToSave: true, //the edited word is save even if u didnot press enter without it you should press enter to save it
        //nonEditableRows: ()=>[1,2,3], //no edit on first 3 rows
      })}
      //selectRow={selectRow}
      filter={filterFactory()}
      filterPosition="bottom"
      />
    </div>
    <button className="btn btn-primary"  onClick={() =>window.App.changePage(<DataViewDemo/>)}  > Go Back</button>

    </div>
  );
}
}
export default Payment;

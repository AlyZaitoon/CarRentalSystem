import axios from "axios";
import {useState,useEffect, Component} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter,numberFilter,customFilter,dateFilter,multiSelectFilter} from "react-bootstrap-table2-filter";
import Header from "./Header";
import ReservationsService from "../Services/ReservationsService";
class FullReport extends Component {
  constructor(props)
  {
    super(props);
    this.service= ReservationsService
    this.state={
      data:[]
    }
    
    this.columns =[
        {
            dataField:"user_id", //key name
            text:"User ID", //how u want to show it?
            sort:true ,   //set sorting to true to sort it
            filter:textFilter(),
          }, 
        {
            dataField:"fname",
            text:"Name",
            sort:true,
            filter: textFilter(),
          },
        {
            dataField:"sex",
            text:"Gender",
            sort:true,
            filter: textFilter(),
          },
        {
            dataField:"bdate",
            text:"Birth date",
            sort:true,
            filter: dateFilter(),
          },
          {
            dataField:"phone",
            text:"Phone number",
            sort:true,
            filter: textFilter(),
          },
         {
            dataField:"reservation_number",
            text:"Reservation no",
            sort:true,
            filter: numberFilter(),
          },
        {
            dataField:"plate_id",
            text:"Plate ID", 
            sort:true ,   
            filter:textFilter(),
          },
          {
            dataField:"type",
            text:"Type",
            sort:true,
            filter: textFilter(),
          },
          {
            dataField:"model",
            text:"Model",
            sort:true,
            filter: textFilter(),
          },
          {
            dataField:"color",
            text:"Color",
            sort:true,
            filter: textFilter(),
          },
          {
            dataField:"year",
            text:"Year",
            sort:true,
            filter: dateFilter(),
          },
          {
            dataField:"car_status",
            text:"Status",
            sort:true,
            filter: textFilter(),
          },
          {
            dataField:"rate",
            text:"Rate per day",
            sort:true,
            filter: numberFilter(),
          },
        {
            dataField:"pickup_date",
            text:"Pickup date",
            sort:true,
            filter: dateFilter(),
          },
          {
            dataField:"return_date",
            text:"Return date",
            sort:true,
            filter: dateFilter(),
          },
         {
            dataField:"status",
            text:"Status",
            sort:true,
            filter: textFilter(),
          },
          {
            dataField:"payment",
            text:"Payment",
            sort:true,
            filter: numberFilter(),
          }
        ]
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
  componentDidMount(){
    this.service.fullReport().then((response) => {
        this.setState({ data: response})

    });
}
// ******************************************************

   selectRow={ //makes checkboxes to select selected Row
    mode: "checkbox",
    clickToSelect:true,
    clickToEdit: true,
  };
   
render(){
  return (
<div>
    <Header/>
    <div className="App">
      <BootstrapTable
      keyField ="id" 
      data={this.state.data} 
      columns={this.columns} 
      striped 
      hover 
      condensed 
      cellEdit={cellEditFactory({
        mode:"dbclick", //double click to edit selected
        blurToSave: true, //the edited word is save even if u didnot press enter without it you should press enter to save it
        //nonEditableRows: ()=>[1,2,3], //no edit on first 3 rows
      })}
      //selectRow={selectRow}
      filter={filterFactory()}
      filterPosition="bottom"
      />
    </div>
    
    </div>
  );
}
}
export default FullReport;

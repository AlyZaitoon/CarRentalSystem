import axios from "axios";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter,numberFilter,customFilter,dateFilter,multiSelectFilter} from "react-bootstrap-table2-filter";
import Header from "./Header";
function Reservations() {
  const[data,setData] = useState([]);
  
  useEffect(() =>{
    getData()
  },[]);

   const  getData = () =>{
    axios.get("http://localhost:8080/getReservations").then(res=>{
    setData(res.data);
    console.log(res.data);
    //Appear data on table
    //res.data.forEach(obj,ind=>obj.__id=ind)
  });
    //console.log(res.data)
  };
  const selectRow={ //makes checkboxes to select selected Row
    mode: "checkbox",
    clickToSelect:true,
    clickToEdit: true,
  };
  const columns = [
  {
    dataField:"reservation_number",
    text:"Reservation no",
    sort:true,
    editable: true, //no edit in this column at all
    filter: numberFilter(),
  },
  
  {
    dataField:"user_id", //key name
    text:"User ID", //how u want to show it?
    sort:true ,   //set sorting to true to sort it
    filter:textFilter(),
  },
  {
    dataField:"plate_id", //key name
    text:"Plate ID", //how u want to show it?
    sort:true ,   //set sorting to true to sort it
    filter:textFilter(),
  },
  
  
  {
    dataField:"pickup_date",
    text:"Pickup date",
    sort:true,
    editable: true, //no edit in this column at all
    filter: dateFilter(),
  },
  {
    dataField:"return_date",
    text:"Return date",
    sort:true,
    editable: true, //no edit in this column at all
    filter: dateFilter(),
  },
  {
    dataField:"status",
    text:"Status",
    sort:true,
    filter: textFilter(),
    validator:(newValue,row,column)=>{ //Validation
      if(isNaN(newValue)){
        return{
          valid:false,
          message:"Please enter numeric value",
        };
      }
      return true;  
    },

  },
  {
    dataField:"payment",
    text:"Payment",
    sort:true,
    editable: true, //no edit in this column at all
    filter: numberFilter(),
  },
  ]

  return (
<div>
    <Header/>
    <div className="App">
      <BootstrapTable
      keyField ="id" 
      data={data} 
      columns={columns} 
      striped 
      hover 
      condensed 
      pagination ={paginationFactory()}
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

export default Reservations;

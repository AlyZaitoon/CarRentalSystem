import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect, Component} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter,numberFilter,customFilter,dateFilter,multiSelectFilter} from "react-bootstrap-table2-filter";
import Header from "./Header";
import CustomerService from "../Services/CustomerService";
class Customer  extends Component{
  
  constructor(props)
  {
    super(props);
    
      this.state={
        data:[]
      }
      this.columns = [{
        dataField:"customer_id", //key name
        text:"Customer ID", //how u want to show it?
        sort:true ,   //set sorting to true to sort it
        filter:textFilter(),
      },
      {
        dataField:"fname",
        text:"Name",
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
        dataField:"sex",
        text:"Gender",
        sort:true,
        editable: true, //no edit in this column at all
        filter: textFilter(),
      },
      {
        dataField:"bdate",
        text:"Birth date",
        sort:true,
        editable: true, //no edit in this column at all
        filter: dateFilter(),
      },
      {
        dataField:"phone",
        text:"Phone number",
        sort:true,
        editable: true, //no edit in this column at all
        filter: textFilter(),
      },
      ];
      this.service= CustomerService;
  }
  // useEffect(() =>{
  //   getData()
  // },[]);

  //  getData = () =>{
  //   axios("https://jsonplaceholder.typicode.com/comments").then((res)=>{
  //   console.log(res.data);
  //   setData(res.data); //Appear data on table
  //   //res.data.forEach(obj,ind=>obj.__id=ind)
  // });
    //console.log(res.data)
  // };
  componentDidMount(){
    this.service.getCustomers().then((response) => {
        this.setState({ data: response})

    });
}


   selectRow={ //makes checkboxes to select selected Row
    mode: "checkbox",
    clickToSelect:true,
    clickToEdit: true,
  };
 
render(){
  return (
    <>
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
    </>
  );
    }
}

export default Customer;

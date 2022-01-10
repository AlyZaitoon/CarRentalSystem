import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect, Component} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter,numberFilter,customFilter,dateFilter,multiSelectFilter} from "react-bootstrap-table2-filter";
import Header from "./Header";
import CarService from "../Services/CarService";


class Cars extends Component {
  
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
this.car=  CarService;
this.columns=this.columns = [{
  dataField:"plate_id", //key name
  text:"Plate ID", //how u want to show it?
  sort:true ,   //set sorting to true to sort it
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
  editable: true, //no edit in this column at all
  filter: textFilter(),
},
{
  dataField:"color",
  text:"Color",
  sort:true,
  editable: true, //no edit in this column at all
  filter: textFilter(),
},
{
  dataField:"year",
  text:"Year",
  sort:true,
  editable: true, //no edit in this column at all
  filter: dateFilter(),
},
{
  dataField:"car_status",
  text:"Status",
  sort:true,
  editable: true, //no edit in this column at all
  filter: textFilter(),
  validator:(newValue,row,column)=>{ 
   console.log(newValue)
    if(newValue.toLowerCase()!='out of service'&&newValue.toLowerCase()!='active')
      return{
        valid:false,
        message:"Please State Active or out of service",
      }
      row.car_status=newValue;
      this.updateCar(row);

      return true;
    }
    
  
},
{
  dataField:"rate",
  text:"Rate per day",
  sort:true,
  editable: true, //no edit in this column at all
  filter: numberFilter(),
},
];
  }
  updateCar(car)
  {
    this.car.updateCar(car);
  }

 componentDidMount(){
        CarService.getCars().then((response) => {
          console.log(response.data)
            this.setState({ data: response.data})
        });
    }
  
componentDidMount() {
  this.car.getCars().then((response) =>{ 
     
    this.setState({ data: response })
    console.log(this.state.data);

    });
  
}





  // useEffect(() =>{
  //   getData()
  // },[]);

  // getData = () =>{
  //   axios("https://jsonplaceholder.typicode.com/comments").then((res)=>{
  //   console.log(res.data);
  //   setData(res.data); //Appear data on table
  //   //res.data.forEach(obj,ind=>obj.__id=ind)
  // });
  //   //console.log(res.data)
  // };

   selectRow={ //makes checkboxes to select selected Row
    mode: "checkbox",
    clickToSelect:true,
    clickToEdit: true,
  };
  
   

render (){
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

export default Cars;

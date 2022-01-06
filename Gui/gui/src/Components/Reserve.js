import React, { Component ,useState} from "react";
import data from "./data";

class Reserve extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        filteredData:[],
        datatosearch:[],
        filterPlate:'',
        filterType:'',
        filterModel:'',
        filterColor:'',
        filterYear:'',
        }
        this.state.datatosearch=data.cardData;
        this.searchText = this.searchText.bind(this);
    }
    
      searchText = value => {
        
        this.state.filterPlate=value          
        this.filterData(value)
    }
    filterData = value => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") this.state.datatosearch=data.cardData;
        else {
          const filteredData = this.state.datatosearch.filter(item => {
            return Object.keys(item).some(key =>
               item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          this.state.datatosearch=filteredData;
        }
      }
render(){
    
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="form-label h4">Reserve</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterPlate}
                            onChange={e=>this.searchText(e.target.value)}
                        />
                    </div>
                </div>
                {this.state.datatosearch.map((item, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.type}</h5>
                                    <p className="card-text"> {item.model}</p>
                                    <p className="card-text"> {item.rate}</p>
                                    <p className="card-text"> {item.status}</p>
                                    {item.status === 'Out of Service' &&

                                        <button type='button' className="btn btn-primary" disabled>Reserve</button>
                                    }
                                    {item.status === 'Active' &&
                                        <button type='button' className="btn btn-primary" >Reserve</button>
                                    }
                                

                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            
        </section>
    )




}


}


export default Reserve;
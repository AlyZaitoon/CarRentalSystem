import React, { Component ,useState} from "react";
import data from "./data";

class Reserve extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        filter:''
        }
    }
render(){
    data.cardData[0].title="HI";
    
    data.cardData[0].Availability = 'Out of Service';
    const searchText = (event) => {
        this.setState({
            filter:event.target.value          
        });
        
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(this.state.filter.toString().toLowerCase())
        )
        
    })
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="form-label h4">Reserve</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>
                </div>
                {dataSearch.map((item, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"> {item.price}</p>
                                    <p className="card-text"> {item.Availability}</p>
                                    {item.Availability === 'Out of Service' &&

                                        <button type='button' className="btn btn-primary" disabled>Reserve</button>
                                    }
                                    {item.Availability === 'Active' &&
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
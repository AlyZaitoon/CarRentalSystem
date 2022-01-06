import React, { Component ,useState} from "react";
import data from "./data";

class Reserve extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        filterType:'',
        filterRate:'',
        filterModel:'',
        filterYear:'',
        filterColor:'',
        }
    }
render(){

    const searchTextType = (event) => {
        this.setState({
            filterType:event.target.value
        })
                  
        console.log(this.state.filterType)

        
    }
    const searchTextRate = (event) => {
        this.setState({
            filterRate:event.target.value
        })
                  
        console.log(this.state.filterRate)
        
    }
    const searchTextModel = (event) => {
        this.setState({
            filterModel:event.target.value
        })
                  
        console.log(this.state.filterModel)

        
    }
    const searchTextYear= (event) => {
        this.setState({
            filterYear:event.target.value
        })
                  
        console.log(this.state.filterYear)
        
    }
    const searchTextColor = (event) => {
        this.setState({
            filterColor:event.target.value
        })
                  
        console.log(this.state.filterColor)
        
    }
    const TypeColumn = ["type"];
    const modelColumn = ["model"];
    const RateColumn = ["rate"];
    const yearColumn = ["year"];
    const colorColumn = ["color"];

    let dataSearchbytype = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            TypeColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterType.toString().toLowerCase()) : false
        )
        
    })
    let dataSearchbyRate = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            RateColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterRate.toString().toLowerCase()) : false
        )
        
    })
    let dataSearchbymodel = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            modelColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterModel.toString().toLowerCase()) : false
        )
        
    })
    let dataSearchbyyear = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            yearColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterYear.toString().toLowerCase()) : false
        )
        
    })
    let dataSearchbycolor= data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            colorColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterColor.toString().toLowerCase()) : false
        )
        
    })
    const intersection = dataSearchbytype.filter(value => dataSearchbyRate.includes(value)).filter(value => dataSearchbymodel.includes(value)).filter(value => dataSearchbyyear.includes(value)).filter(value => dataSearchbycolor.includes(value));
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
            
                <div className="row justify-content-center ">
                    <div className="col px-md-5 ">
                        <label className="form-label h4">Type</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterType}
                            onChange={searchTextType.bind(this)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col px-md-5">
                        <label className="form-label h4">Rate</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterRate}
                            onChange={searchTextRate.bind(this)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="form-label h4">Model</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterModel}
                            onChange={searchTextModel.bind(this)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="form-label h4">Year</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterYear}
                            onChange={searchTextYear.bind(this)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="form-label h4">Color</label>
                        <input
                            type="text"
                            className="from-control"
                            value={this.state.filterColor}
                            onChange={searchTextColor.bind(this)}
                        />
                    </div>
                
                </div>
                {intersection.map((item, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.type}</h5>
                                    <p className="card-text"> {item.model}</p>
                                    <p className="card-text"> {item.year}</p>
                                    <p className="card-text"> {item.color}</p>
                                    <p className="card-text"> {item.status}</p>
                                    <p className="card-text"> {item.rate}</p>
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

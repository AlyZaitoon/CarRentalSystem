
import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import CarService from '../Services/CarService';
import { Rating } from 'primereact/rating';
import './DataViewDemo.scss'
import data from './data';
import car1 from '../img/car1.jpg'
import car2 from '../img/car2.jpg'
import car3 from '../img/car3.jpg'
import car4 from '../img/car4.jpg'
import car5 from '../img/car5.jpg'
export class DataViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };
        

        this.sortOptions = [    
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ];

        this.productService = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        
    }

    // componentDidMount() {
    //     // this.productService.getCars().then(res=>{
    //     //     console.log(res);
    //     //     this.state.products = res.data;
    //     // });
    //     // this.state.products=this.productService.getCars();
    // }
    componentDidMount() {
        this.productService.getCars().then(data =>{ 
            data[0].img=car1;
            data[1].img=car2;
            data[2].img=car3;
            this.setState({ products: data })});
        
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
            console.log(this.state.sortField)
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
        console.log(this.state.products);
    }

    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={data.img} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.type} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.type}</div>
                        <div className="product-description">{data.model}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.rate}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.status === 'OutOfService'}></Button>
                       
                    </div>
                </div>
            </div>
        );
    }

     renderGridItem(data) {
        return (
            <div className="p-col-12 p-md-4">
                 <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                         <div>
                             <i className="pi pi-tag product-category-icon"></i>
                             <span className="product-category">{data.model}</span>
                        </div>
                        <span className={`product-badge status-${data.status}`}>{data.status}</span>
                    </div>
                     <div className="product-grid-item-content">
                    <img src={data.img} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                         <div className="product-name">{data.type}</div>
                        <div className="product-description">{data.model}</div>
                         <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                         <span className="product-price">${data.rate}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.status === 'OUTOFSTOCK'}></Button>
                  </div>
                </div>
             </div>
        );
     }

    itemTemplate(product, layout) {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(product);
        else if (layout === 'grid')
            return this.renderGridItem(product);
    }

    renderHeader() {
         return (
            <div className="p-grid p-nogutter">
              <div className="p-col-6" style={{textAlign: 'left'}}>                
              <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={this.onSortChange}/>
               </div>
              <div className="p-col-6" style={{textAlign: 'right'}}>
                   <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({ layout: e.value })} />
                 </div>
            </div>
         );
     }

     render() {
         
         const header = this.renderHeader();

         return (
             <div className="dataview-demo">
                 <div className="card">
                     <DataView value={this.state.products} layout={this.state.layout} header={header}
                             itemTemplate={this.itemTemplate} paginator rows={9}
                             sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                </div>
             </div>
        );
     }
 }

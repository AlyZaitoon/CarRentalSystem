
import './DataViewDemo.scss'
import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import CarService from '../Services/CarService';
import { InputText } from 'primereact/inputtext';
import Pickdates from './Pickdates'
import Payment from './Payment';
import Interface from './LoginRegInterface';
export class DataViewDemo extends Component {


    constructor(props) {
        super(props);

        this.state = {
            products: [],
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            sortField: null,

            filterType: '',
            filterRate: '',
            filterModel: '',
            filterYear: '',
            filterColor: '',

        };
        window.Search = this;
        this.formDataplateId = '';
        this.sortOptions = [
            { label: 'Price High to Low', value: '!rate' },
            { label: 'Price Low to High', value: 'rate' },
        ];

        this.productService = CarService;
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);

        this.intersection = []
        // this.dataSearchbytype=[]
        // this. dataSearchbyRate=[]
        // this.dataSearchbymodel=[]



    }


    componentDidMount() {
        this.productService.getCars().then(data => {
            
            this.setState({ products: data })
        });

        this.dataSearchbytype = this.state.products

    }
    reserve(data) {
        this.formDataplateId = data.plate_id;

        window.App.changePage(<Pickdates />)

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
                <img src={data.img} alt="logo" />
                    {/* <img src="..\img\car4.jpeg" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.type} /> */}
                    <div className="product-list-detail">
                        <div className="product-name">{data.type}</div>
                        <div className="product-description">{data.model}</div>
                        <div className="product-description">{data.color}</div>
                        <div className="product-description">{data.year}</div>
                        
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.rate}</span>
                        <Button icon="pi pi-shopping-cart" label="Reserve" onClick={() => this.reserve(data)} disabled={data.status === 'OutOfService'} ></Button>

                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(data) {

        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card-small">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.model}</span>
                        </div>
                        <span className={`product-badge status-${data.status}`}>{data.status}</span>
                    </div>
                    <div className="product-grid-item-content">
                        <img src={data.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.type}</div>
                        <div className="product-description">{data.model}</div>
                        <div className="product-description">{data.color}</div>
                        <div className="product-description">{data.year}</div>
                        
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.rate}</span>
                        <Button icon="pi pi-shopping-cart" label="Reserve" disabled={data.status === 'OUTOFSTOCK'} onClick={() => this.reserve(data)}></Button>
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
        const searchTextType = (event) => {
            this.setState({
                filterType: event.target.value
            })

            console.log(this.state.filterType)
        }
        const searchTextModel = (event) => {
            this.setState({
                filterModel: event.target.value
            })

            console.log(this.state.filterModel)


        }
        const searchTextRate = (event) => {
            this.setState({
                filterRate: event.target.value
            })

            console.log(this.state.filterRate)

        }
        const searchTextYear = (event) => {
            this.setState({
                filterYear: event.target.value
            })

            console.log(this.state.filterYear)

        }
        const searchTextColor = (event) => {
            this.setState({
                filterColor: event.target.value
            })

            console.log(this.state.filterColor)

        }

        const TypeColumn = ["type"];
        const modelColumn = ["model"];
        const RateColumn = ["rate"];
        const yearColumn = ["year"];
        const colorColumn = ["color"];

        let dataSearchbytype = this.state.products.filter(item => {
            return Object.keys(item).some(key =>
                TypeColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterType.toString().toLowerCase()) : false
            )

        })
        let dataSearchbymodel = this.state.products.filter(item => {
            return Object.keys(item).some(key =>
                modelColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterModel.toString().toLowerCase()) : false
            )

        })
        let dataSearchbyRate = this.state.products.filter(item => {
            return Object.keys(item).some(key =>
                RateColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterRate.toString().toLowerCase()) : false
            )

        })
        let dataSearchbyyear = this.state.products.filter(item => {
            return Object.keys(item).some(key =>
                yearColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterYear.toString().toLowerCase()) : false
            )

        })
        let dataSearchbycolor = this.state.products.filter(item => {
            return Object.keys(item).some(key =>
                colorColumn.includes(key) ? item[key].toString().toLowerCase().includes(this.state.filterColor.toString().toLowerCase()) : false
            )

        })


        this.intersection = dataSearchbytype.filter(value => dataSearchbymodel.includes(value)).filter(value => dataSearchbyRate.includes(value)).filter(value => dataSearchbyyear.includes(value)).filter(value => dataSearchbycolor.includes(value));

        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6  " style={{ textAlign: 'left' ,margin:'10px' }}>
                    <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={this.onSortChange} style={{ marginRight: '10px' }} />
                    <Button icon="pi pi-shopping-cart" label="Reservation Info" onClick={() => { window.App.changePage(<Payment />) }} style={{ marginRight: '10px' }} ></Button>

                    <span className="p-float-label" style={{    display:'inline-block' }}>
                        <InputText    value={this.state.filterType} onChange={searchTextType.bind(this)}/>
                        <label htmlFor="in">Type</label>
                    </span>

                     <span className="p-float-label" style={{    display:'inline-block' }}>
                        <InputText    value={this.state.filterModel} onChange={searchTextModel.bind(this)} />
                        <label htmlFor="in">Model</label>
                    </span>
                   
                 <span className="p-float-label" style={{    display:'inline-block' }}>
                        <InputText   value={this.state.filterRate} onChange={searchTextRate.bind(this)} />
                        <label htmlFor="in">Price</label>
                    </span>

                     <span className="p-float-label" style={{    display:'inline-block' }}>
                        <InputText  value={this.state.filterYear}onChange={searchTextYear.bind(this)} />
                        <label htmlFor="in">Year</label>
                    </span>

                    <span className="p-float-label" style={{    display:'inline-block' }}>
                        <InputText  value={this.state.filterColor} onChange={searchTextColor.bind(this)} />
                        <label htmlFor="in">Color</label>
                    </span>
                    <Button  label="Logout" onClick={() =>window.App.changePage(<Interface/>)}  ></Button>


                </div>

                <div className="p-col-6" style={{ textAlign: 'right' }}>
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
                    <DataView value={this.intersection} layout={this.state.layout} header={header}
                        itemTemplate={this.itemTemplate} paginator rows={9}
                        sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                </div>
            </div>
        );
    }
}

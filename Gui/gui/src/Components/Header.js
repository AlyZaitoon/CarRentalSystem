import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Interface from './LoginRegInterface';
import Form from './Form';
import Customer from './Customer';
import Reservations from './Reservations';
import Cars from './Cars';
import ReservationsCar from "./CarReserveReport";
import FullReport from "./FullReport";
import SimpleReport from "./SimpleReport";
import { Button } from 'primereact/button';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
                <div className='container '>
                    <a className="navbar-brand text-info ">Admin</a>
                    <button className="navbar-toggler border border-info text-info" onClick={() => { this.setState({ show: !this.state.show }) }}>
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                    <div className={this.state.show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<ReservationsCar/>)}}>Cars and Reservations</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<FullReport/>)}}>Full Report</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<SimpleReport/>)}}>Simple Report</Button>
                            </li>

                            <li className="nav-item ">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<Cars/>)}}>Cars Information</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<Reservations/>)}}>Reservations Data</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<Customer/>)}}>Customers Data</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info"onClick={()=>{window.App.changePage(<Form/>)}}>Add Car</Button>
                            </li>
                            <li className="nav-item">
                                <Button className="p-button-info" onClick={()=>{window.App.changePage(<Interface/>)}}>Log Out</Button>
                            </li>
                       
                        </ul>
                    </div>
                </div>
                
            </nav>

        )
    }
}
export default Header;
import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Interface from './LoginRegInterface';
import Form from './Form';
import Customer from './Customer';
import Reservations from './Reservations';
import Cars from './Cars';


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
                <div className='container'>
                    <a className="navbar-brand text-info">Admin</a>
                    <button className="navbar-toggler border border-info text-info" onClick={() => { this.setState({ show: !this.state.show }) }}>
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                    <div className={this.state.show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <button className="nav-link text-dark" onClick={()=>{window.App.changePage(<Cars/>)}}>Cars Information</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-dark" onClick={()=>{window.App.changePage(<Reservations/>)}}>Reservations Data</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-dark" onClick={()=>{window.App.changePage(<Customer/>)}}>Customers Data</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-dark"onClick={()=>{window.App.changePage(<Form/>)}}>Add Car</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-dark" onClick={()=>{window.App.changePage(<Interface/>)}}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>

        )
    }
}
export default Header;
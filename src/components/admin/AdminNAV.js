import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminNAV extends Component {
    render() {
        return (
            <div className="adminNAV">
                <h1> Excel Interiors </h1>
                <div className="your-account"><h2> Your Account </h2></div>
                <div className="customers-link">
                    <img src={require('../../media/avatar.svg')} />
                    <Link to={'/customers'}> Customers </Link>
                </div>
                <div className="invoices-link">
                    <img src={require('../../media/invoice.svg')} />
                    <Link to={'/invoices'}> Invoices </Link>
                </div>
            </div>  
        )
    }
}
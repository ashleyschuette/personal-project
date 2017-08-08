import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CustomerNAV extends Component {
    render() {
        return (
            <div>
                <h1> Excel Interiors </h1>
                <h2> Your Account </h2>
                <Link to={'/invoices'}> Invoices </Link>
            </div>    
        )
    }
}
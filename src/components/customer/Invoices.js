import React, { Component } from 'react';
import CustomerNAV from './CustomerNAV';

export default class CustomerInvoices extends Component {
    render() {
        return (
            <div>
                <nav>
                    <CustomerNAV/>
                </nav>
                <h1> Customer Invoices </h1>
            </div>
        )
    }
}
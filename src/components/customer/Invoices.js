import React, { Component } from 'react';
import CustomerNAV from './CustomerNAV';
import InvoiceCard from './../admin/InvoiceCard';
import axios from 'axios';

export default class CustomerInvoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get('/api/invoices/2')
            .then((customers) => { 
                console.log(customers.data)
                this.setState({ customers: customers.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.customers)
        return (
            <div>
                <nav>
                    <CustomerNAV/>
                </nav>
                <h1> Customer Invoices </h1>
                <div>
                    {this.state.customers.map((customer, index) => {
                        return <InvoiceCard
                            key={index}
                            imageurl={customer.imageurl}
                            date={customer.creation_date}
                            firstName={customer.first_name}
                            lastName={customer.last_name}
                            furnitureType={customer.furniture_type}
                            workType={customer.work_type}
                            quantity={customer.quantity}
                            total={customer.total} />
                    })}
                </div>
            </div>
        )
    }
}
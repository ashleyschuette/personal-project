import React, { Component } from 'react';
import AdminNAV from './AdminNAV';
import axios from 'axios';
import InvoiceCard from './InvoiceCard';

export default class CustomerInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get('/api/customer/2')
            .then((customers) => this.setState({ customers: customers.data }))
            .catch(err => console.log(err));
    }


        render() {
            return (
                <div>
                    <nav>
                        <AdminNAV />
                    </nav>
                     {/* <h1> { customer.first_name + ' ' + customer.last_name } </h1>  */}
                     <div>
                        
                        {this.state.customers.map((customer, index) => {
                            // add money data type together console.log(Number(customer.labor_cost.replace('$', '')) + Number(customer.supplies_cost.replace('$', '')) + Number(customer.foam_cost.replace('$', '')) + Number(customer.fabric_cost.replace('$', '')))
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
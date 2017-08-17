import React, { Component } from 'react';
import AdminNAV from './AdminNAV';
import axios from 'axios';
import InvoiceCard from './InvoiceCard';
import { Link } from 'react-router-dom';

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
                    <AdminNAV />
                    <div className="component-content">
                       <h1 className="component-header"> CUSTOMER NAME HERE </h1>   
                     
                        <div className="customer-cards">
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
                                total={'$'+customer.total} />
                        })}
                    </div>
                     <div className="add-button">
                    <Link to={'/createinvoice/2'}>
                    <button>
                        <img src={require('../../media/add.svg')} />             
                    </button>
                    </Link>
                    </div>        
                    </div>
                 </div> 
            )
        }
    }
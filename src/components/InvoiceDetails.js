import React, { Component } from 'react';
import AdminNAV from './admin/AdminNAV';
import DetailsCard from './DetailsCard';
import axios from 'axios';

export default class InvoiceDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }

       
    }

     componentDidMount() {
         axios.get('/api/invoice/details/2')
             .then((customers) => this.setState({ customers: customers.data }))
             .catch(err => console.log(err));
        }

    render() {
        return (
            <div>
                <AdminNAV />
                <div className="component-content">
                    <div className="component-header"><h1> Furniture Type Here </h1></div>    
                {this.state.customers.map((customer, index) => {
                    return <DetailsCard
                        key={index}
                        imageurl={customer.imageurl}
                        date={customer.creation_date}
                        quantity={customer.quantity}
                        workType={customer.work_type}
                        laborCost={customer.labor_cost}
                        suppliesCost={customer.supplies_cost}
                        foamCost={customer.foam_cost}
                        fabricCost={customer.fabric_cost}
                        total={customer.total}
                        fabricBrand={customer.fabric_brand}
                        fabricPattern={customer.fabric_pattern}
                        fabricColor={customer.fabric_color}
                        yards={customer.yards}
                    />
                    })}
                </div>    
            </div>    
        )
    }
}
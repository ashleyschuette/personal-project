import React, { Component } from 'react';
import axios from 'axios';
import AdminNAV from './AdminNAV';
import Card from './Card';
import { Link } from 'react-router-dom';


export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            customers: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSearchSubmit(event) {
        event.preventDefault();
        var searchArray = this.state.searchTerm.split(' ');
        var firstName = searchArray[0];
        var lastName = searchArray[1];
        axios.get(`/api/customer?firstName=${firstName}&lastName=${lastName}`)
            .then((customers) => this.setState({searchTerm: '', customers: customers.data}))
            .catch(err => console.log(err));
    }
        
    render() {

        return (
            <div>
                <nav>
                    <AdminNAV />
                </nav>
                <h1> Customers </h1>
                <form onSubmit={this.onSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                </form>
                <div>
                    {this.state.customers.map((customer, index) => {
                        return <Card key={index}   
                            id={customer.id}    
                            firstName={customer.first_name}
                            lastName={customer.last_name}
                            phone={customer.phone}
                            email={customer.email}
                            address={customer.address + customer.city + customer.state + customer.zipcode} />
                    })}
                    <div>
                    <Link to={'/createcustomer'}>
                    <button>Add</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
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

    componentDidMount() {
        axios.get('/api/customers')
            .then((customers) => this.setState({ customers: customers.data }))
            .catch(err => console.log(err));
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSearchSubmit(event) {
        event.preventDefault();
        // var searchArray = this.state.searchTerm.split(' ');
        // var firstName = searchArray[0];
        // var lastName = searchArray[1];
        axios.get(`/api/customer?firstName=${this.state.searchTerm}&lastName=${this.state.searchTerm}`)
            .then((customers) => this.setState({searchTerm: '', customers: customers.data}))
            .catch(err => console.log(err));
    }
        
    render() {

        return (
            <div>
                <AdminNAV />
                <div className="component-content">
                <div className="component-header"><h1> Customers </h1></div>
                <form onSubmit={this.onSearchSubmit}>
                    <img src={require('../../media/search.svg')} />  
                    <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />        
                </form>
                <div className="customer-cards">
                    {this.state.customers.map((customer, index) => {
                            return <Card key={index}
                                id={customer.id}
                                firstName={customer.first_name}
                                lastName={customer.last_name}
                                phone={customer.phone}
                                email={customer.email}
                                address={customer.address}
                                location={customer.city + ',' + ' ' + customer.state + ' ' + customer.zipcode}
                        />
                        })}
                    </div>    
                    <div className="add-button">
                    <Link to={'/createcustomer'}>
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
import React, { Component } from 'react';
import AdminNAV from './AdminNAV';
import axios from 'axios';
import InvoiceCard from './InvoiceCard';
import { Link } from 'react-router-dom';

export default class Invoices extends Component {
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
        axios.get('/api/invoices')
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
        axios.get(`/api/search?firstName=${this.state.searchTerm}&lastName=${this.state.searchTerm}`)
            .then((customers) => this.setState({ searchTerm: '', customers: customers.data }))
            .catch(err => console.log(err));
    }
    
    render() {
        console.log('this is the customers array', this.state.customers)
          return (
            <div>
                <AdminNAV />
                <div className="component-content">
                <div className="component-header"><h1> Invoices </h1></div>
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
                            return <InvoiceCard 
                                key={index}
                                id={customer.customerid}
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
                    <Link to={`/createinvoice/${this.props.match.params.id}`}>
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
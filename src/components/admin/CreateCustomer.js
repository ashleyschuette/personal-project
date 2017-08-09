import React, { Component } from 'react';
import AdminNAV from './AdminNAV';
import axios from 'axios';

export default class CreateCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zipcode: ''
        }

        this.firstNameonChange = this.firstNameonChange.bind(this);
        this.lastNameonChange = this.lastNameonChange.bind(this);
        this.emailonChange = this.emailonChange.bind(this);
        this.phoneonChange = this.phoneonChange.bind(this);
        this.addressonChange = this.addressonChange.bind(this);
        this.cityonChange = this.cityonChange.bind(this);
        this.stateonChange = this.stateonChange.bind(this);
        this.zipcodeonChange = this.zipcodeonChange.bind(this);
        
        this.onSave = this.onSave.bind(this);
    }

    firstNameonChange(event) {
        this.setState({
            firstName: event.target.value,
        })
    }

     lastNameonChange(event) {
        this.setState({
            lastName: event.target.value
        })
     }
    
     emailonChange(event) {
         this.setState({
            email: event.target.value
        })
     }
    
     phoneonChange(event) {
         this.setState({
             phone: event.target.value
         })
     }
    
     addressonChange(event) {
         this.setState({
            address: event.target.value
        })
     }
    
     cityonChange(event) {
         this.setState({
            city: event.target.value
        })
     }
    
     stateonChange(event) {
         this.setState({
            state: event.target.value
        })
     }
    
     zipcodeonChange(event) {
         this.setState({
            zipcode: event.target.value
        })
    }

    onSave() {
        axios.post('/api/createcustomer', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        })
            .then((response) => console.log(response))
            .catch(err => console.log(err));
        
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        })
    }


    render() {
        return (
            <div>
            <nav>
                <AdminNAV/>
            </nav>
            <h1> Create New Customer </h1>
            <h3>Name</h3>
            <input onChange={this.firstNameonChange} value={this.state.firstName} placeholder="FIRST NAME" />
            <input onChange={this.lastNameonChange} value={this.state.lastName} placeholder="LAST NAME" />
            <input onChange={this.emailonChange} value={this.state.email} placeholder="EMAIL" />
            <input onChange={this.phoneonChange} value={this.state.phone} placeholder="PHONE" />
            <h3>Address</h3>
            <input onChange={this.addressonChange} value={this.state.address} placeholder="STREET" />
            <input onChange={this.cityonChange} value={this.state.city} placeholder="CITY" />
            <input onChange={this.stateonChange} value={this.state.state} placeholder="STATE" />
            <input onChange={this.zipcodeonChange} value={this.state.zipcode} placeholder="ZIP CODE" />
            <button onClick={this.onSave}>SAVE</button>    
            </div>  
        )
    }
}


// Linking to another component
// <link to={'path'}>NAME OF LINK</Link>
// import {Link} from 'react-router-dom'
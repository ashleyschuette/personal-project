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
            firstName: event.target.value
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
        console.log(this.state.firstName)
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
    }


    render() {
        return (
            <div>
            <nav>
                <AdminNAV/>
            </nav>
            <h1> Create New Customer </h1>
            <h3>Name</h3>
            <input onChange={this.firstNameonChange} placeholder="FIRST NAME" />
            <input onChange={this.lastNameonChange} placeholder="LAST NAME" />
            <input onChange={this.emailonChange} placeholder="EMAIL" />
            <input onChange={this.phoneonChange} placeholder="PHONE" />
            <h3>Address</h3>
            <input onChange={this.addressonChange} placeholder="STREET" />
            <input onChange={this.cityonChange} placeholder="CITY" />
            <input onChange={this.stateonChange} placeholder="STATE" />
            <input onChange={this.zipcodeonChange} placeholder="ZIP CODE" />
            <button onClick={this.onSave}>SAVE</button>    
            </div>  
        )
    }
}


// Linking to another component
// <link to={'path'}>NAME OF LINK</Link>
// import {Link} from 'react-router-dom'
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
                <AdminNAV />
                <div className="component-content">
                    <div className="component-header"><h1> Create New Customer </h1></div>
                    <div className="new-customer-content">
                    <h3 className="bold-label">Name</h3>
                    <div className="first-last-name">
                        <input className="input-border" onChange={this.firstNameonChange} value={this.state.firstName} placeholder="FIRST NAME" />
                        <input className="input-border" onChange={this.lastNameonChange} value={this.state.lastName} placeholder="LAST NAME" />
                    </div>
                    <div className="email-phone">
                        <input className="input-border" onChange={this.emailonChange} value={this.state.email} placeholder="EMAIL" />
                        <input className="input-border" onChange={this.phoneonChange} value={this.state.phone} placeholder="PHONE" />
                    </div>
                    <h3 className="bold-label">Address</h3>
                    <div className="street-city">
                        <input className="input-border" onChange={this.addressonChange} value={this.state.address} placeholder="STREET" />
                        <input className="input-border" onChange={this.cityonChange} value={this.state.city} placeholder="CITY" />
                    </div>
                    <div className="state-zip">
                        <input className="input-border" onChange={this.stateonChange} value={this.state.state} placeholder="STATE" />
                        <input className="input-border" onChange={this.zipcodeonChange} value={this.state.zipcode} placeholder="ZIP CODE" />
                    </div>
                    <button className="input-border" className="save-button" onClick={this.onSave}>SAVE</button>    
                    </div> 
                </div>    
            </div>    
        )
    }
}
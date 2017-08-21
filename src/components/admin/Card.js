import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component {
    render() {
        return (
            <div className="customer-info">
                <Link to={`/customer/${this.props.id}`}>
                <div className="fullname">{this.props.firstName + ' ' + this.props.lastName}</div>
                <div className="phone">Phone
                    <span>{this.props.phone} </span>        
                </div>
                <div className="email">Email
                    <span>{this.props.email}</span>
                </div>
                <div className="address">Address
                    <span>{this.props.address}</span>
                    <span>{this.props.location}</span>    
                </div>
                </Link>    
            </div>
        );
    }
}
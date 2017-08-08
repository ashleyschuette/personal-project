import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component {
    render() {
        return (
            <div>
                <Link to={`/customer/${this.props.id}`}>
                {this.props.firstName + this.props.lastName}
                {this.props.phone}
                {this.props.email}
                {this.props.address}
                </Link>    
            </div>
        );
    }
}
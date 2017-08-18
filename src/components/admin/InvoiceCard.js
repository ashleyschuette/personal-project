import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InvoiceCard extends Component {
    render() {
        
        return (
            <div className="customer-invoice-link">
            <Link to={`/details/${this.props.id}`}>
            <div className="customer-invoice-card">
                <div className="invoice-card-image">
                    <img style={{height: '100%', position: 'absolute', left: '50%', transform: 'translate(-50%, 0%'}} src={this.props.imageurl} />
                </div>
                <div className="customer-invoice-info">
                <div>{this.props.date}</div>
                <div className="name">{this.props.firstName+' '+this.props.lastName}</div>
                <div className="furniture-type">{this.props.furnitureType}</div>
                <div>Type:
                    <span>{' '+this.props.workType}</span>
                </div>
                <div>Quantity:
                    <span>{' '+this.props.quantity}</span>
                </div>
                <div className="total">
                        {this.props.total}
                    </div>    
            </div>
            </div>
            </Link>  
            </div>    
        );
    }
}
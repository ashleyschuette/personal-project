import React, { Component } from 'react';
import StripeChekcout from 'react-stripe-checkout';
import axios from 'axios';
import InvoiceDetails from './InvoiceDetails';

export default class Payment extends Component {
    constructor(props) {
        super(props);

    }

    onToken = (token) => {
        token.card = void 0;
        axios.post('http://localhost:3001/api/payment', { token, amount: this.props.total })
            .then(response => {
                console.log(response)
                if (response.data === "OK") {
                    axios.put(`/api/payment/${this.props.invoiceid}`)
                        .then(response => console.log(response))
                        .catch(err => console.log(err));
                    alert('Thank you for your payment')
                }
        });
    }


    render() {
        console.log(this.props)
        const stripePayment = (<StripeChekcout
        
            token={this.onToken}
            stripeKey={'pk_test_qpLSWJpFY6tIpAUdwJUoljH7'}
            amount={this.props.total * 100}
            currency={'USD'}
            locale="auto">
            <button className="payment-button">Make A Payment</button> 
        </StripeChekcout>);
        

        return (
            <div className="button-container">
                {stripePayment}
            </div>
        );
    }
}
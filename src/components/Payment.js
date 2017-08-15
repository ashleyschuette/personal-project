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
        axios.post('http://localhost:3001/api/payment', { token, amount: this.props.total } ).then(response => {
            alert('Thank you for your payment')
        });
    }




    render() {

        const stripePayment = (<StripeChekcout
            token={this.onToken}
            stripeKey={'pk_test_qpLSWJpFY6tIpAUdwJUoljH7'}
            amount={this.props.total * 100}
            currency={'USD'}
            locale="auto"
        />);

        return (
            <div>
                {stripePayment}
            </div>
        );
    }
}
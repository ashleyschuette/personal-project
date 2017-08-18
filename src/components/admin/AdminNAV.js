import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class AdminNAV extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleCustomers: false,
            toggleInvoices: false
        }

        this.onToggleCustomers = this.onToggleCustomers.bind(this);
        this.onToggleInvoices = this.onToggleInvoices.bind(this);
    }



    onToggleCustomers() {
        this.setState({
            toggleCustomers: true,
            toggleInvoices: false
        })
    }
    
    onToggleInvoices() {
        this.setState({
            toggleCustomers: false,
            toggleInvoices: true
        })
    }   

    render() {

        var displayNone = {
            display: 'none'
        }

        var style = {
            backgroundColor: '#33bdb3'
        }
        return (
            <div className="adminNAV">
                <h1> Excel Interiors </h1>
                <div className="your-account"><h2> Your Account </h2></div>
                <div className="customers-link"
                    onClick={this.onToggleCustomers}       
                    style={{...this.props.status ? null : displayNone, ...this.state.toggleCustomers ? style : null}}>
                    <img src={require('../../media/avatar.svg')} />
                    <Link to={'/customers'}> Customers </Link>
                </div>
                <div className="invoices-link"
                    onClick={this.onToggleInvoices}    
                    style={this.state.toggleInvoices ? style: null}>
                    <img src={require('../../media/invoice.svg')} />
                    <Link to={'/invoices'}> Invoices </Link>
                </div>
                <div className="signout-link">
                    <a href={'http://localhost:3001/auth/logout'}>Sign Out</a>
                </div>
            </div>  
        )
    }
}

function mapStateToProps(state) { 
    return {
        status: state.currentUser_status
    }
}

export default connect(mapStateToProps)(AdminNAV)
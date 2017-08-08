import React, { Component } from 'react';
import AdminNAV from './AdminNAV';

export default class Invoices extends Component {
    render() {
        return (
            <div>
                <nav>
                    <AdminNAV/>
                </nav>
                <h1> Invoices </h1>
            </div>    
        )
    }
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Sign In
import SignIn from './components/SignIn';

//Customer 
import CustomerInvoices from './components/customer/Invoices';
import InvoiceDetails from './components/InvoiceDetails';

//Admin
import Customers from './components/admin/Customers';
import CreateCustomer from './components/admin/CreateCustomer';
import CustomerInvoice from './components/admin/CustomerInvoice';
import CreateInvoice from './components/admin/CreateInvoice';
import Invoices from './components/admin/Invoices';

export default (
    <Switch>
        <Route component={SignIn} path="/signin" />

        <Route component={CustomerInvoices} path="/invoices/:id" />
        
        <Route component={InvoiceDetails} path="/details/:id" />
        <Route component= {Customers} path="/customers" />
        <Route component= {CreateCustomer} path="/createcustomer" /> 
        <Route component= {CustomerInvoice} path="/customer/:id" />
        <Route component= {CreateInvoice} path="/createinvoice/:id" />
        <Route component= {Invoices} path="/invoices" />
    </Switch>
)
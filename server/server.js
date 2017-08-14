const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const keys = require('./../src/keys');

const app = module.exports = express();

massive('postgres://nvcmqnobwchylz:9336669d8135ac4bad09d0e55bff551a5d02c65f78f45934765f84f01c31d494@ec2-54-227-237-223.compute-1.amazonaws.com:5432/d62o5e3mkq1n3a?ssl=true')
    .then(db => {
        app.set('db', db);

        passport.use(new Auth0Strategy({
            domain: keys.domain,
            clientID: keys.clientID,
            clientSecret: keys.clientSecret,
            callbackURL: 'http://localhost:3001/auth/callback'
        },
        
            function (accessToken, refreshToken, extraParams, profile, done) {

                const { email } = profile._json;

                const id = profile.identities[0].user_id;

                db.update_user([id, email]).then((user) => {
                        done(null, user[0])
                })
                // here you would go to db to find and create user
                // return done(null, profile); // Goes to serializeUser when you invoke done 
            }));
    })


app.use(bodyParser.json());
app.use(session({
    secret: 'fhuJHR3lkjs5hfsjbUBSKLJBiuhLS4u93q84uhLKFH',
    resave: true,
	saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session()) 


// Auth0
app.use(cors());

passport.serializeUser(function (profileToSession, done) {
    console.log('serialize', profileToSession)
  done(null, profileToSession); // puts second arguement(profiletosession) on session
});

passport.deserializeUser(function(profileFromSession, done) { // profilefromsession is value from session
  done(null, profileFromSession);
});
        
app.get('/auth', passport.authenticate('auth0'));


app.get('/auth/callback',
    passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/' // url determines if the user is admin or customer
    }))

app.get('/auth/me', function (req, res) {
    res.send(req.user)
})  

app.get('/auth/logout', function (req, res) {
    req.logout();
    res.redirect('http://localhost:3000/') // change this to the sign in route
})

// Database

// app.get('/api/user', customerController.getUser);


const customerController = require('./controllers/customerController');
// Get all customers on load
app.get('/api/customers', customerController.getAllCustomers)
//Get Customers for Search in Admin View
app.get('/api/customer', customerController.getCustomer)
// Get specific customer invoice by id
app.get('/api/customer/:id', customerController.getCustomerInvoice)
// Creating a new customer
app.post('/api/createcustomer', customerController.postNewCustomer)
// Creating new invoice for a specific customer
app.post('/api/createinvoice/:id', customerController.postNewInvoice)
// Get all invoices on load
app.get('/api/invoices', customerController.getAllInvoices)
// Get specific customer invoice details 
app.get('/api/invoice/details/:id', customerController.getInvoiceDetails)


//Get user specific invoices
const userController = require('./controllers/userController');
app.get('/api/invoices/:id', userController.getUserInvoices)
    
    
    
app.listen(3001, () => {
    console.log('Listening on port 3001');
})


// examples
    // app.put('/api/product/:id', products_controller.update);
    // app.post('/api/product', products_controller.create);
    // app.delete('/api/product/:id', products_controller.delete);
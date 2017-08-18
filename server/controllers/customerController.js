module.exports = {
    getAllCustomers: (req, res, next) => {
        const db = req.app.get('db');

        db.get_allCustomers()
            .then((customers) => {
            res.status(200).send(customers)
            })
        .catch(err => res.status(500).send(err))
    },

    getAllInvoices: (req, res, next) => {
        const db = req.app.get('db');

        const { id, admin } = req.params

        db.findAdminStatus([req.user.id, req.user.admin]).then((user) => {
            // console.log('found admin', user)

            if (user[0].admin) {
                db.get_allInvoices()
                    .then((customers) => {
                        res.status(200).send(customers)
                    })
            } else {
                db.get_UserInvoices([req.user.id])
                    .then((customers) => {
                        // console.log('found customer', customers)

                        res.status(200).send(customers)
                    })
                .catch(err => res.status(500).send(err))
            }
            
        })
        
        // db.get_allInvoices()
        //     .then((customers) => {
        //         res.status(200).send(customers)
        //     })
        //     .catch(err => res.status(500).send(err))

         // const firstname = '%' + req.query.firstName + '%';
        // const lastname = '%' + req.query.lastName + '%';
        

        // if (req.query.firstName && req.query.lastName) {
        //     db.get_searchInvoice([firstname, lastname])
        //     .then((customers) => {
        //     res.status(200).send(customers)
        //     })
        // .catch(err => res.status(500).send(err))
        // }
    },
    
     searchInvoices: (req, res, next) => {
        const db = req.app.get('db');
        const firstname = '%' + req.query.firstName + '%';
        const lastname = '%' + req.query.lastName + '%';
        
        if (req.query.firstName && req.query.lastName) {
            db.get_searchInvoice([firstname, lastname])
            .then((customers) => {
            res.status(200).send(customers)
            })
        .catch(err => res.status(500).send(err))
        }
    },
 
    

    getCustomer: (req, res, next) => {
        const db = req.app.get('db');

        const { firstName, lastName } = req.query;
        const firstname = '%' + firstName + '%';
        const lastname = '%' + lastName + '%';

        db.get_customers([firstname, lastname])
            .then((customers) => {
                res.status(200).send(customers)
            })
    
            .catch(err => res.status(500).send(err))
    },
    
    getCustomerInvoice: (req, res, next) => {
        const db = req.app.get('db');

        const { id } = req.params;
        

        db.get_customerInvoice([id])
        
            .then((customers) => {
            res.status(200).send(customers)
        })
    },

    getInvoiceDetails: (req, res, next) => {
        const db = req.app.get('db');

        const { id } = req.params
        
        db.get_invoiceDetails([id])
            .then((customers) => {
                console.log(customers)
                res.status(200).send(customers)
            })
    },

    postNewCustomer: (req, res, next) => {
        const db = req.app.get('db')

        const { firstName, lastName, email, phone, address, city, state, zipcode } = req.body;
        
        db.create_customer([firstName, lastName, email, phone, address, city, state, zipcode])
            .then(() => res.status(200).json())
            .catch(() => res.status(500).json())
    },
    
    postNewInvoice: (req, res, next) => {
        const db = req.app.get('db')

        const {workType, furnitureType, quantity, laborCost, suppliesCost, foamCost, fabricCost, fabricBrand, fabricPattern, fabricColor, yards, notes, date } = req.body;
        db.create_customerInvoice([2, workType, furnitureType, quantity, laborCost, suppliesCost, foamCost, fabricCost, fabricBrand, fabricPattern, fabricColor, yards, notes, date, laborCost+suppliesCost+foamCost+fabricCost])
            .then(() => res.status(200).json())
            .catch(() => res.status(500).json())
    },
    
      updatePaidInvoice: (req, res, next) => {
        const db = req.app.get('db');

        const { invoiceid } = req.params
        
        db.update_paidInvoice([invoiceid])
            .then(() => res.status(200).json())
            .catch(() => res.status(500).json())
    }
}
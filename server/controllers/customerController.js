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

        const { firstName, lastName } = req.query;

        if (firstName && lastName) {
            db.get_searchInvoice([firstName, lastName])
            .then((customers) => {
            res.status(200).send(customers)
            })
        .catch(err => res.status(500).send(err))
        }
        
        db.get_allInvoices()
            .then((customers) => {
                res.status(200).send(customers)
            })
            .catch(err => res.status(500).send(err))
        },

    getCustomer: (req, res, next) => {
        const db = req.app.get('db');

        const { firstName, lastName } = req.query;

        db.get_customers([firstName, lastName])
            .then((customers) => {
                res.status(200).send(customers)
            })
    
            .catch(err => res.status(500).send(err))
    },
    
    getCustomerInvoice: (req, res, next) => {
        const db = req.app.get('db');

        const {id} = req.params

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
        db.create_customerInvoice([2, workType, furnitureType, quantity, laborCost, suppliesCost, foamCost, fabricCost, fabricBrand, fabricPattern, fabricColor, yards, notes, date])
            .then(() => res.status(200).json())
            .catch(() => res.status(500).json())
    }
}
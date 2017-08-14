module.exports = {
    getUserInvoices: (req, res, next) => {
        const db = req.app.get('db');

        const { id } = req.params

        db.get_UserInvoices([id])
            .then((customers) => {
            res.status(200).send(customers)
            })
            .catch((err) => console.log(err))
    }
}


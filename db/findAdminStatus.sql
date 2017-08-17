select customer.id, customer.admin, customer.first_name, customer.last_name from customer
where id = $1 and admin = $2
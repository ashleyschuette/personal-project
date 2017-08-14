select invoice.*, customer.first_name, customer.last_name
from invoice
join customer
on id = customerid
where first_name = $1 and last_name = $2
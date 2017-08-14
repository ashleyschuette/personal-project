select invoice.*, customer.first_name, customer.last_name
from invoice
join customer
on id = customerid

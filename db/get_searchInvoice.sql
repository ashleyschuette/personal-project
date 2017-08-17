select invoice.*, customer.first_name, customer.last_name
from invoice
join customer
on id = customerid
where lower(first_name) LIKE lower($1) or lower(last_name) LIKE lower($2)


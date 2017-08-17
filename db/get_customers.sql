select * from customer
where lower(first_name) LIKE lower($1) or lower(last_name) LIKE lower($2)
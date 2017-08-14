update customer 
set id = $1
where email = $2
returning *
create table Customer (
    id varchar(255),
    admin boolean,
    first_name varchar(40),
    last_name varchar(40),
    email varchar(320),
    phone varchar(20),
    address varchar(255),
    city varchar(255),
    state varchar(2),
    zipcode varchar(10),
    admin boolean
);

create table Invoice (
    customerid varchar(255),
    work_type varchar(255),
    furniture_type varchar(255),
    quantity integer,
    labor_cost money,
    supplies_cost money,
    foam_cost money,
    fabric_cost money,
    fabric_brand varchar(255),
    fabric_pattern varchar(255),
    fabric_color varchar(255),
    yards integer,
    notes text,
    imageurl varchar(500),
    finished boolean,
    creation_date varchar(255),
    total money
);

insert into Customer (id, first_name, last_name, email, phone, address, city, state, zipcode, admin) 
values (2, 'John', 'Doe', 'johndoe@gmail.com', '123-456-7891', '123 Lake St', 'Provo', 'UT', '34567', false)

insert into Invoice (customerid, work_type, furniture_type, quantity, labor_cost, supplies_cost, foam_cost, fabric_cost, fabric_brand, fabric_pattern, fabric_color, yards, notes, imageurl, finished, creation_date, total)
values (2, 'upholstery', 'sofa', 1, 500, 50, 120, 700, 'Robert Allen', 'Wild', 'Brown', 22, 'Welt on cushions. Use 6inch foam', 'https://s-media-cache-ak0.pinimg.com/736x/57/0a/1b/570a1bcb6a7ad720a214451c30508626--asian-sofas-wooden-sofa-set-designs.jpg', false, '2017-08-03', 1370)
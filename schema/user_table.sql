create table user_table (
    id VARCHAR PRIMARY KEY not null,
    first_name VARCHAR(50)not null,
    last_name VARCHAR(50) not null,
    email VARCHAR(100)not null,
    password VARCHAR(100) not null,
);
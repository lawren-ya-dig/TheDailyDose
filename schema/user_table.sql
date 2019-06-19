create table user_table (
    id serial PRIMARY KEY not null,
    first_name VARCHAR not null,
    last_name VARCHAR not null,
    email VARCHAR not null,
    username VARCHAR not null,
    password VARCHAR not null,
);
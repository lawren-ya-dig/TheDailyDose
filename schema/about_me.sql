create table about_me (
    id serial,
    name VARCHAR not null,
    content VARCHAR not null,
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user_table(id)
)
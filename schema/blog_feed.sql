create table blog_feed (
    id serial,
    user_id int,
    title VARCHAR not null,
    content VARCHAR not null,
    post_date DATE not null,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user_table(id);
)
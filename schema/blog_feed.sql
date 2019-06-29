create table blog_feed (
    id serial PRIMARY KEY,
    user_id INT not null,
    title VARCHAR not null,
    content VARCHAR not null,
    FOREIGN KEY (user_id) REFERENCES user_table(id)
)
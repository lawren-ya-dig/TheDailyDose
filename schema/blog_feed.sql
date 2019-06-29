create table blog_feed (
    id serial,
    user_id VARCHAR not null,
    title VARCHAR not null,
    content VARCHAR not null,
    -- photo BINARY(max),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user_table(id);
)
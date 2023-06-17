CREATE TABLE users (
    Id BIGSERIAL PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

--insert into users (Username, Password) values ('admin', 'admin');

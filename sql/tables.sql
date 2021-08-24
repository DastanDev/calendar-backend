CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(230) NOT NULL,
	lastName VARCHAR(230) NOT NULL,
	password VARCHAR(240) NOT NULL,
	email VARCHAR(200) NOT NULL UNIQUE,
	isAdmin BOOLEAN DEFAULT(FALSE)
);

CREATE TABLE events (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(240) NOT NULL,
	date DATETIME DEFAULT(NOW())
);

CREATE TABLE news (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(240) NOT NULL,
    content VARCHAR(240) NOT NULL,
    image VARCHAR(240),
    slug VARCHAR(240) NOT NULL UNIQUE
);
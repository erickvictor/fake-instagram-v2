CREATE DATABASE fake_instagram;

CREATE TABLE fake_instagram.users (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
	email varchar(200),
	password varchar(200),
	username varchar(200),
	avatar varchar(200),
	create_at TIMESTAMP  
);

create table fake_instagram.publications ( 
	id int(10) PRIMARY KEY auto_increment, 
	content varchar(200), image varchar(200), 
	user_id int(10), 
	FOREIGN KEY (user_id) REFERENCES users(id), 
	create_at TIMESTAMP 
);

create table fake_instagram.comments( 
	id int(10) PRIMARY KEY auto_increment,
	content varchar(200), 
	user_id int(10), 
	publication_id int(10), 
	FOREIGN KEY (user_id) REFERENCES users(id), 
	FOREIGN KEY (publication_id) REFERENCES publications(id), 
	create_at TIMESTAMP 
);
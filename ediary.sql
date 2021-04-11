

create database ediary_dev;

CREATE USER 'user001'@'localhost' IDENTIFIED BY 'Iniya@123';

GRANT ALL PRIVILEGES ON ediary_dev.* TO 'user001'@'localhost';

use ediary_dev;

show tables;

DROP TABLE users;
DROP TABLE roles;
DROP TABLE users_roles;

CREATE TABLE roles (
	role_id BIGINT,
	role_name VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	modified_date DATE NOT NULL,
	status CHAR(1) NOT NULL,
	PRIMARY KEY (role_id)
);

INSERT INTO roles VALUES (10001, 'ADMINISTRATOR', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10002, 'ROLE_EVENTS', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10003, 'ROLE_CONTACTS', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10004, 'ROLE_NOTES', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO roles VALUES (10005, 'ROLE_EXPENSES', '2021-01-05 18:00:00', '2021-01-06 18:00:00', 'A');

UPDATE roles set role_name='ROLE_EVENTS' WHERE role_id=10002;
UPDATE roles set role_name='ROLE_CONTACTS' WHERE role_id=10003;
UPDATE roles set role_name='ROLE_NOTES' WHERE role_id=10004;
UPDATE roles set role_name='ROLE_EXPENSES' WHERE role_id=10005;


CREATE TABLE users (
	user_id BIGINT, 
	user_name VARCHAR(50) NOT NULL, 
	password VARCHAR(20) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50),
	created_date DATE NOT NULL,
	modified_date DATE NOT NULL,
	status CHAR(1) NOT NULL,
	PRIMARY KEY (user_id)
	
);


INSERT INTO users VALUES (10001, 'vini', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10002, 'events', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10003, 'contacts', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10004, 'notes', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');
INSERT INTO users VALUES (10005, 'expenses', 'vini', 'Vadivel Murugan', 'K', '2021-01-06 18:00:00', '2021-01-06 18:00:00', 'A');

CREATE TABLE users_roles (
	user_id BIGINT,
	role_id BIGINT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

INSERT INTO users_roles VALUES (10001, 10001);
INSERT INTO users_roles VALUES (10002, 10002);
INSERT INTO users_roles VALUES (10003, 10003);
INSERT INTO users_roles VALUES (10004, 10004);
INSERT INTO users_roles VALUES (10005, 10005);

CREATE TABLE relationships (relationship_id BIGINT, relationship_name VARCHAR(50), PRIMARY KEY(relationship_id));
INSERT INTO relationships VALUES (10001, 'PARENTS');
INSERT INTO relationships VALUES (10002, 'SPOUSE');
INSERT INTO relationships VALUES (10003, 'BROTHER');
INSERT INTO relationships VALUES (10004, 'SISTER');
INSERT INTO relationships VALUES (99999, 'OTHERS');

CREATE TABLE cgroups (groupid BIGINT, group_name VARCHAR(50), PRIMARY KEY(groupid));
INSERT INTO cgroups VALUES (10001, 'FAMILY');
INSERT INTO cgroups VALUES (10002, 'COWORKER');
INSERT INTO cgroups VALUES (10003, 'FRIEND');
INSERT INTO cgroups VALUES (10004, 'EX-COWORKER');
INSERT INTO cgroups VALUES (99999, 'OTHERS');

CREATE TABLE countries (country_id BIGINT, iso_2 VARCHAR(2), iso_3 VARCHAR(3), country_name VARCHAR(50), PRIMARY KEY(country_id));

INSERT into countries VALUES (10001, 'IN', 'IND', 'INDIA');
INSERT into countries VALUES (10002, 'PK', 'PAK', 'PAKISTAN');
INSERT into countries VALUES (10003, 'US', 'USA', 'UNITED STATES');

CREATE TABLE states (state_id BIGINT, 
	state_name VARCHAR(50), 
	country_id BIGINT, 
	PRIMARY KEY (state_id), 
	FOREIGN KEY (country_id) references countries (country_id));
	
INSERT into states VALUES(10001, 'TAMILNADU', 10001);
INSERT into states VALUES(10002, 'KERALA', 10001);
INSERT into states VALUES(10003, 'ORISSA', 10001);
INSERT into states VALUES(10004, 'PUNJAB', 10002);
INSERT into states VALUES(10005, 'BALOCHISTAN', 10002);
INSERT into states VALUES(10006, 'AZAD KASHMIR', 10002);
INSERT into states VALUES(10007, 'NEWYORK', 10003);
INSERT into states VALUES(10008, 'FLORIDA', 10003);
INSERT into states VALUES(10009, 'CALIFORNIA', 10003);

CREATE TABLE status (status_id BIGINT, 
	status_name VARCHAR(50), 
	PRIMARY KEY (status_id));
	
INSERT INTO status VALUES (100, 'ACTIVE');
INSERT INTO status VALUES (101, 'BLOCKED');
INSERT INTO status VALUES (102, 'DELETED');
	
CREATE TABLE contacts (
	contact_id BIGINT AUTO_INCREMENT, 
	nick_name VARCHAR(50) NOT NULL, 
	first_name VARCHAR(50), 
	last_name VARCHAR(50), 
	personal_email VARCHAR(50) NOT NULL,
	work_email VARCHAR(50),
	primary_address VARCHAR(75) NOT NULL,
	secondary_address VARCHAR(75),
	city VARCHAR(50),
	state_id BIGINT,
	country_id BIGINT,
	zip VARCHAR(10),
	mobile VARCHAR(15),
	home_phone VARCHAR(15),
	work_phone VARCHAR(15),
	relationship_id BIGINT NOT NULL,
	groupid BIGINT NOT NULL,
	status_id BIGINT,
	user_id BIGINT,
	PRIMARY KEY (contact_id),
	FOREIGN KEY (status_id) references status (status_id),
	FOREIGN KEY (state_id) references states (state_id),
	FOREIGN KEY (country_id) references countries (country_id),
	FOREIGN KEY (relationship_id) references relationships (relationship_id),
	FOREIGN KEY (groupid) references cgroups (groupid),
	FOREIGN KEY (user_id) references users (user_id)
);

ALTER TABLE contacts AUTO_INCREMENT = 10000001;


INSERT into contacts (nick_name, first_name, last_name, personal_email, work_email, primary_address, secondary_address, city, state_id, country_id, zip, mobile, home_phone, work_phone, relationship_id, groupid, status_id, user_id) VALUES ('KVM', 'Vadivel Murugan', 'K', 'kvadivelmurugan@gmail.com', '', 'F3 SAI ENCLACE SOWMIYA NAGAR PERUMBAKKAM', '', 'CHENNAI', 10001, 10001, '600100', '+91-9X4XXXXXXX', '', '', 10001, 10001, 100, 10003);

INSERT into contacts (nick_name, first_name, last_name, personal_email, work_email, primary_address, secondary_address, city, state_id, country_id, zip, mobile, home_phone, work_phone, relationship_id, groupid, status_id, user_id) VALUES ('VISH', 'Vishwa', 'V', 'v.v@email.com', '', '#1, 1st MAIN ROAD, RAJA ANNAMALAIPURAM', '', 'CHENNAI', 10001, 10001, '600100', '+91-9X4XXXXXXX', '', '', 10001, 10001, 100, 10003);

INSERT into contacts (nick_name, first_name, last_name, personal_email, work_email, primary_address, secondary_address, city, state_id, country_id, zip, mobile, home_phone, work_phone, relationship_id, groupid, status_id, user_id) VALUES ('RAJ', 'RAJ MADHAVAN', 'K', 'rajm@india.com', '', '#100 VEYIL STREET SANTHOSAPURAM', '', 'CHENNAI', 10001, 10001, '600100', '+91-9X4XXXXXXX', '', '', 10001, 10001, 100, 10001);


CREATE TABLE homies (
	user_id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR,
	profile_img TEXT
);
CREATE TABLE homies_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES homies(user_id)
);
CREATE TABLE posts (
	post_id SERIAL PRIMARY KEY,
	title VARCHAR(40),
	img_url TEXT,
	content TEXT,
	likes INT,
	user_id INT REFERENCES homies(user_id)
);

INSERT INTO homies (name, email, profile_img)
VALUES 
('Jonathan', 'jon@than.com', 'https://tmssl.akamaized.net/images/portrait/originals/38232-1556523583.jpg'),
('Josh', 'jmcc@nn.com', 'https://josh-mccann.com/images/pic11.JPG');

INSERT INTO homies_hash (hash, user_id)
VALUES ('password', 1),
('s3cret', 2);

INSERT INTO posts (title, img_url, content, likes, user_id)
VALUES ('Cute Dog', 'https://www.petguide.com/wp-content/uploads/2015/03/bernedoodle-11.jpg', 'Bernedoodles are cute', 0, 1),
('Hot Dogs', 'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg', 'Hot dogs from Mexico', 0, 2);
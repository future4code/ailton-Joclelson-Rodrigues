CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

ALTER TABLE Films DROP COLUMN rating;

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

SELECT * FROM Films 
INNER JOIN Rating ON Films.id = Rating.movie_id;

SELECT m.id as movie_id, r.rate as rating FROM Films m
INNER JOIN Rating r ON m.id = r.movie_id;

SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Films m
LEFT JOIN Rating r ON m.id = r.movie_id;
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

select * from Actor;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET	playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001";
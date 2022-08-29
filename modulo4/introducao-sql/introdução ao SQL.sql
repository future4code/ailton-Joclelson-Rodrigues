create table Actor (
	id varchar(255) primary key,
    name varchar(255) not null,
    salary float not null,
    birth_date date not null,
    gender varchar(6) not null
);

show databases;

show tables;

describe Actor;

insert into Actor(id, name, salary, birth_date, gender)
values(
	"004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

select * from Actor;

select id, salary from Actor;

select id, name from Actor where gender = "male";

select * from Actor where gender = "famale";

select salary from Actor where name = "Tony Ramos";

select id, name, salary from Actor where salary < 500000;

select id, name from Actor where id = "002";

select * from Actor
where (name like "A%" or name like "J%") and salary > 300000;

select * from Actor
where name not like "A%" and salary > 350000;

select * from Actor
where name like "%g%" or name like "%G%";

select * from Actor 
where (name like "%g%" or name like "%G%" or name like "%a%" or name like "%A%")
  and salary between 350000 and 900000;
  
create table Films (
	id varchar(255) primary key,
    name varchar(255) not null,
    synopsis text,
    launch_date date not null,
    evaluation int not null
);

drop table Films;
select * from Films;

insert into Films(id, name, synopsis, launch_date, evaluation)
values(
	"004", 
	"Tropa de Elite",
	"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
	"2007-07-02", 
	9
);

select id, name, evaluation from Films where id = 001;

select * from Films where name = "Tropa de Elite";

select * from Films where evaluation > 7;

select * from Films where name like "%vida%";

select * from Films
	where name like "%TERMO DE BUSCA%" or synopsis like "%TERMO DE BUSCA%";
    
select * from Films where launch_date < "2020-05-04";
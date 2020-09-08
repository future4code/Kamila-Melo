###Exercício 1

```
create table Actor(
	id varchar(255) primary key,
    name varchar(255) not null,
    salary float not null,
    birth_date date not null,
    gender varchar(6) not null
);
```

a)
* varchar significa que será usado caracteres e o número dentro do parêntese significa o tamanho máximo que ele terá
* date será do tipo data
* not null não será aceito valores vazios
* primary key para identificar um valor único de cada linha

b)
* show databases - lista todas as bases
* show tables - mostra todas as tabelas criadas

```
show databases;

show tables;
```

c) Acontece um erro, pois faltaria o complemento **COLUMNS FROM** e o nome da tabela.

```
show Actor;
```

###Exercício 2
```
insert into Actor(id, name, salary, birth_date, gender)
values(
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);
```
a)
```
insert into Actor(id,name,salary,birth_date, gender)
values(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b)  ***13:48:21 inserir valores de ator (id, nome, salário, data de nascimento, gênero) ("002", "Kamila Melo", 1200000, "1988-04-23", "feminino") Código de erro: 1062. Duplicado entrada '002' para a chave 'PRIMÁRIA' 0,016 seg***

Pelo Id se tratar uma chave primária não é possível que se crie um novo elemento com o mesmo valor de Id. Pois é um valor único para cada linha da tabela.

```
insert into Actor(id,name,salary,birth_date, gender)
values(
	"002",
    "Kamila Melo",
    1200000,
    "1988-04-23",
    "female"
);
```

c) ***13:53:36 inserir nos valores do ator (id, nome, salário) ("003", "Fernanda Montenegro", 300000, "1929-10-19", "feminino") Código de erro: 1136. A contagem de colunas não contagem do valor de correspondência na linha 1 0,015 s***

Foram passados 3 colunas que seriam completadas, mas foi passado 5 valores.

```
insert into Actor(id, name, salary,birth_date, gender)
values(
	"003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);
```

d) ***13:56:49 inserir valores de ator (id, salário, data de nascimento, gênero) ("004", 400000, "1949-04-18", "masculino") Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,015 s***

O campo nome não possui um valor padrão e nem pode ser vazio.

```
insert into Actor(id, name, salary, birth_date, gender)
values(
	"004",
    "José da Silva",
    400000,
    "1949-04-18",
    "male"
);
```

e) ***13:59:20 INSERT INTO Ator (id, nome, salário, data de nascimento, sexo) VALORES ("005", "Juliana Paes", 719333.33, 26/03/1979, "feminino") Código de erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,016 s***

O formato da data foi escrita de forma incorreta. Como não foi colocada dentro de aspas foi feito uma opeação matemática.

```
insert into Actor(id, name, salary, birth_date, gender)
values(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) 
```
insert into Actor(id, name, salary, birth_date, gender)
values(
	"006",
    "Thiago Lacerda",
    500000,
    "1978-01-19",
    "male"
);

insert into Actor(id, name, salary, birth_date, gender)
values(
	"007",
    "Paloma Duarte",
    500000,
    "1977-05-21",
    "female"
);
```

###Exercício 3

a)
```
select * from Actor
where gender = "female"
```

b)
```
select salary from Actor
where name = "Tony Ramos";
```

c) Mostra a próxima linha pois não tem nenhum valor atribuído.

```
select * from Actor
where name = "invalid";
```

d)
```
select id, name, salary from Actor
where salary <= 500000;
```

e) ***14:15:02 SELECT id, nome do ator WHERE id = "002" LIMIT 0, 1000 Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,015 seg***

Foi solicitado que devolvesse o campo nome. Mas está escrito de forma errada, deveria ser name.

```
select id, name from Actor where id = "002"
```

###Exercício 4

a) Seleciona todos os campos da tabela Actor onde o nome começa com a letra A ou a letra J, e desses os que possuem um salário maior que R$ 300.000.

b) 
```
select * from Actor
where name not like "A%" and salary > 350000;
```

c) 
```
select * from Actor
where name like "%G%" or name like "%g%";
```

d) 
```
select * from Actor
where (name like "%G%" or name like "%g%" or name like "%a%" or name like "%A%") and salary between 350000 and 900000;
```

###Exercício 5

a) Criada uma tabela de filmes com um id com até 255 caracteres sendo a chave primária, um nome com até 255 caracteres que não pode estar vazio, uma sinopse do tipo texto com até 255 caracteres e não pode estar vazia, data de lançamento do tipo data e não vazia, e uma avaliação de números inteiros também não vazia.

```
create table movie(
	id varchar(255) primary key,
    name varchar(255) not null,
    synopsis text(255) not null,
    release_date date not null,
    evaluation int not null
);
```

b) 
```
insert into movie (id, name, synopsis, release_date, evaluation)
values (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c)
```
insert into movie (id, name, synopsis, release_date, evaluation)
values (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)
```
insert into movie (id, name, synopsis, release_date, evaluation)
values (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
insert into movie (id, name, synopsis, release_date, evaluation)
values (
	"004",
    "O Filme da Minha Vida",
    "No Brasil dos anos 1960, um jovem professor vive perdas e descobertas enquanto usa sua paixão pelo cinema como válvula de escape. ",
    "2017-08-03",
    9
);
```

###Exercício 6

a)
```
update Actor
set name = "Giovanna Antonelli",
birth_date = "1976-03-18"
where id = "003";
```

b)
```
update Actor
set name = "JULIANA PÃES"
where name = "Juliana Paes";

update Actor
set name = "Juliana Paes"
where name = "JULIANA PÃES";
```

c)
```
update Actor
set name = "Katiuscia Canoro",
salary = 400000,
birth_date = "1978-12-04",
gender = "female"
where id = 005;
```

d) Não ocorreu nenhum erro, mas como não foi encontrado o id passado, não houve qualquer alteração.
```
update Actor
set name = "Kamila Melo"
where id = "8888";
```

###Exercício 7

a)
```
delete from Actor 
where name ="Fernanda Montenegro";
```

b)
```
delete from Actor
where gender = "male" and salary > 1000000;
```

###Exercício 8

a) Pega todos os dados da tabela e separa os dados por quantidade de gênero.
```
select count(*), gender
from Actor
group by gender;
```

b)
```
select id, name from Actor
order by name desc;
```

c)
```
select * from Actor
order by salary asc;
```

d)
```
select * from Actor
order by salary desc
limit 3;
```

e)
```
select avg(salary), gender from Actor
group by gender;
```

#Desafios

###Exercício 9

a)
```
select max(salary) from Actor;
```

b)
```
select min(salary),gender from Actor
where gender = "female";
```

c)
```
select count(*), gender from Actor
where gender = "female";
```

d)
```
select sum(salary) from Actor;
```

###Exercício 10

a)
```
select * from movie
order by name asc;
```

b)
```
select * from movie
order by name asc
limit 5;
```

c)
```
select * from movie
order by release_date desc
limit 3;
```

d)
```
select * from movie
order by evaluation desc
limit 3;
```

###Exercício 11

a)
```
select id, name, evaluation from movie
where id = "004";
```

b)
```
select * from movie
where name = "O Filme da Minha Vida";
```

c)
```
select id, name, synopsis from movie
where evaluation >= 7;
```

###Exercício 12

a)
```
select * from movie
where name like "%vida%";
```

b)
```
select * from movie
where name like "%TERMO DE BUSCA%" or synopsis like "%TERMO DE BUSCA%";
```

c)
```
select * from movie
where release_date < current_date();
```

d)
```
select * from movie
where release_date < current_date() and (name like "%TERMO DE BUSCA%" or synopsis like "%TERMO DE BUSCA%") and evaluation > 7;
```

###Exercício 13

a) Altera a tabela Actor retirando a coluna salary.

b) Altera a tabela Actor trocando a coluna gender para sex sendo do tipo varchar com no máximo 6 caracteres.

c) Altera a tabela Actor trocando a coluna gender para gender do tipo varchar com no máximo 255 caracteres.

d)
```
alter table Actor change gender gender VARCHAR(100);
```

###Exercício 14

a)
```
alter table movie add playing_limit_date date;
```

b)
```
alter table Actor change evaluation evaluation float;
```

c)
```
update movie
set playing_limit_date = "2020-09-08"
where di = "001";

update movie
set playing_limit_date = "2020-11-16"
where di = "004";
```

d) Não ocorre erro, mas não retorna o dado atualizado.
```
delete from movie
where id = "001";

update movie
set name = "Minha Mãe é uma Peça"
where id = "001";
```

###Exercício 15

a)
```
select count(*) from movie
where evaluation > 7.5;
```

b)
```
select avg(evaluation) from movie;
```

c)
```
select count(*) from movie
where playing_limit_date > currant_date();
```

d)
```
select count(*) from movie where release_date < currant_date();
```

e)
```
select evaluation from movie
order by evaluation desc
limit 1;
```

f)
```
select min(evaluation) from movie;
```
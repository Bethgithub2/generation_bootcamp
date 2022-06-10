-- LEER

-- Nos muestra las bases de datos que nosotros tenemos
SHOW DATABASES;

-- Seleccionar la base de datos a usar
USE sakila;

-- Leer todos los datos de una tabla
SELECT * FROM actor;
SELECT * FROM city;
SELECT * FROM sakila;

-- leer partes de una tabla
SELECT city_id, city FROM city;

-- Limitar la cantidad de datos
SELECT * FROM actor LIMIT 10;

-- Ordenar los datos dependiendo de una columna
SELECT * FROM city ORDER BY country_id asc LIMIT 10;

-- Ordenar los datos dependiendo de una columna pero de forma descendente
SELECT * FROM city ORDER BY country_id DESC;

/*
Para hacer consuktas tambien tenenmos operadores de comparacion
Igual  =  
Distintos !=
Mayor  >
Menor <
Menor o igaul que <=
Mayor o igual que >=
como LIKE
No es como   NOT LIKE
*/

SELECT * FROM city WHERE city = "Cuman";
SELECT * FROM actor WHERE first_name = 'Penelope';

SELECT * FROM actor WHERE first_name != 'Penelope';

SELECT * FROM actor WHERE actor_id > 50;
SELECT * FROM actor WHERE actor_id < 100;
SELECT * FROM actor WHERE actor_id >= 50;
SELECT * FROM actor WHERE actor_id >= 100;


SELECT * FROM actor WHERE first_name like 'Penelop';

-- Se utiliza para realizar busquedas
-- Selecciona todas las personas que Terminen con cierto string de palabras
-- COMODINES
SELECT * FROM actor WHERE first_name LIKE '%ope';

-- Seleccionar de la tabla todas las personas que comincen con 
SELECT * FROM actor WHERE first_name LIKE "an%";

-- Seleccionar las personas cuyo nombre contenga "n" 
SELECT * FROM actor WHERE first_name LIKE "%nn%";

-- Selecciona un patron
SELECT * FROM actor WHERE first_name LIKE "%a__e%";

-- not like
SELECT * FROM actor WHERE first_name LIKE "%a__e%";

-- uneindo todo
SELECT * FROM actor WHERE first_name LIKE "%nn%" ORDER BY lasts_name ASC LIMIT 5;
/*
operadores logicos

AND   Debe cumplir ambas condiciones
OR  Basta con que cumpla una de ellas

*/

SELECT * FROM actor WHERE actor_id >50 AND first_name LIKE "%n%"  ;

SELECT * FROM actor where first_name LIKE "%n%" or first_name LIKE "%m%"; 








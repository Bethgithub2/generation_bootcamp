USE Sakila;

SELECT * FROM payment;

-- COUNT () Nos permite contar los elementos o las celdas de una columna
-- AS NOS PERMITE DARLE UN ALIAS O UN NOMBRE TEMPORAL  la columna.
SELECT count(*) AS Cantidad_filas from payment;

SELECT count(*) AS Cantidad_filas from payment WHERE staff_id = 2;

SELECT count(distinct customer_id) from payment;

-- contar filas de la tabla world.country
select count(*) from world.country;

-- SUM() realiza una suma de los valores de una columna
 SELECT sum(amount)AS total from payment where staff_id = 2;

-- Saber cual es el cliente que gasto mas en rentas
SELECT count(*) from payment group by customer_id;

SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id;


SELECT SUM(amount) AS total , customer_id from payment GROUP BY customer_id ORDER BY amount;
-- Manu
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id order by total desc;

-- alejandro
SELECT SUM(amount) AS CUENTA, customer_id from payment GROUP BY customer_id ORDER BY CUENTA DESC;

-- AVG () Nos permite obtener un promedio de cantidades en una columna
select AVG(amount) AS Promedio from payment WHERE customer_id = 248;



-- GROUP BY Agrupa filas que contengan el mismo valor\
-- normalmente se usa en conjunto con COUNT(),AVG(), SUM()

SELECT customer_id, amount from payment group by customer_id;







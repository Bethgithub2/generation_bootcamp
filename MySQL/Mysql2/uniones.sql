USE tienda;

-- JOINS nos permiten combinar datos de distintas tablas

-- Inner Join
-- solamente nos trae las filas donde hay valores validos
-- Omite las fias donde hay null


select
 p.idProducto as clave,
 p.nombre as producto,
 p.idCategoria,
 c.nombre as categoria
 from producto p
inner join categoria c
on p.idCategoria = c.idCategoria
order by clave;

/*
SELECT 
categoria.nombre as categoria, 
producto.nombre as producto
FROM producto 
inner Join categoria on categoria.idCategoria = producto.idCategoria;
*/
 
-- Mostrar las direcciones de cada pais

/*
address - address / city_id
city- city / country_id
country - country / country_id
*/

SELECT 
country.country_id as Clave_de_Pais,
country.country as Pais,
city.city as Ciudad,
address.address as Direccion
from country
inner join city on city.country_id = country.country_id
inner join address on address.city_id = city.city_id;


SELECT 
country.country_id as Clave_de_Pais,
country.country as Pais,
city.city as Ciudad,
address.address as Direccion
from city
inner join country on country.country_id = city.country_id
inner join address on address.city_id = city.city_id;

-- left join
-- Siempre devuelve las filas de la primer tabla, aunque la condicion no se cumpla
select 
cliente.nombre as nombre,
factura.idFactura 
from cliente
left join factura on cliente.idCliente = factura.idCliente
order by nombre;

-- Right join
-- Siempre devuelve las filas de la segunda tabla, aunque la condicion no se cumpla
select 
cliente.nombre as nombre,
factura.idFactura 
from cliente
right join factura on cliente.idCliente = factura.idCliente
order by idFactura;









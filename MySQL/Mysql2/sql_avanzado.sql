USE world;
SELECT 5 + 5;
SELECT * FROM country;

SELECT `Name`,population FROM country ORDER BY population DESC;

SELECT * FROM country WHERE `Name` = 'Mexico';

SELECT * FROM country WHERE population >50000000 AND population <70000000 ORDER BY population;

-- between regresa datos dentro de un rango que nosotros especifiquemos 
Select * from country where Population  between 50000000 and 70000000 order by population;

SELECT * FROM country WHERE continent = 'Asia' OR continent='North America' or continent = 'Oceania' order by Continent;
-- IN nos permite especificar condiciones
SELECT * FROM country WHERE continent IN ('Asia','North America','Oceania') ORDER BY Continent;

SELECT `code`, `name`, region, continent, surfacearea, LifeExpectancy, GNP FROM country WHERE continent IN ('North America', 'Asia', 'Oceania') OR region IN ('Caribean', 'Central America') ORDER BY GNP ASC;


-- Like nos permite buscar un patron especifico que queramos 
SELECT * FROM country WHERE `Name` like '%and';
SELECT * FROM country WHERE `Name` like '%e__a';

-- DISTINCT seleccionar los elementos distintos dentro de una lista de valores repetidos
SELECT Continent FROM country;
SELECT distinct Continent from country;







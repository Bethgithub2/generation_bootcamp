-- crear
-- crear una base de datos
CREATE DATABASE familia;
-- CREATE SCHEMA familia;

-- sELECCIONAR LA BASE DE DATOS
USE familia;

-- crear tabla de persona, es ecesario poner minimo una columna,
-- No es necesario poner NOT NULL en llave primaria
-- Por defecto el valor asignado es NULL 
-- Debemos especificar cual es la llave primaria
-- Para agregar valores unicos se utiliza UNIQUE

CREATE TABLE persona(
	persona_id int AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    estado VARCHAR (255) DEFAULT "Desconocido",
    cumpleanios DATE,
    PRIMARY KEY (persona_id),
    CONSTRAINT email_unico UNIQUE (correo)
);

-- iNSERTAR DATOS EN UNA TABLA
-- Los datos tienen que ser con  el nombre indicado
-- No se necesita colocar el id por que es autoincrementable
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios)VALUES
 ('Lizbeth','bethrubio2017@gmail.com',25,'Feliz','1996-06-18'),
 ('Diego','diego@gmail.com',7,'enojado','2015-08-05');
 
 -- Error 1062: dato unico repetido
 INSERT INTO persona (nombre, correo, edad, estado, cumpleanios) VALUES
 ('jOSE','bethrubio2017@gmail.com',45,'Triste','1996-12-13');
 
 -- Error 1364: de no llenar un dato NOT NULL
 INSERT INTO persona (correo, edad, estado, cumpleanios)VALUES
 ('pepe@gmail.com', 32, 'Alegre','1980-01-01');
 
 -- Ingresar datos que no son necesarios(no tiene el cumpleanios)
 
 INSERT INTO persona (nombre,correo, edad, estado) values
 ('Pepe','pepe@gmail.com',34,'Alegre');
 
 -- Ingresar dato con valor por defecto(No tiene estado)
 INSERT INTO persona (nombre,correo,edad,cumpleanios)values
 ('Antonio','tonio@gmail',40,'1970-10-10');
 
 SELECT * FROM persona;
CREATE TABLE mascota (
mascota_id int AUTO_INCREMENT,
nombre VARCHAR (255) NOT NULL,
edad int NOT NULL,
fk1_persona_id int NOT NULL,
primary key (mascota_id),
foreign key (fk1_persona_id) REFERENCES persona (persona_id)
ON DELETE CASCADE 
ON UPDATE CASCADE
);

SELECT * FROM mascota;

INSERT INTO mascota(nombre,edad, fk1_persona_id) values
('Black',3,1);
INSERT INTO mascota(nombre, edad, fk1_persona_id)values
('Toribio',2,1);

INSERT INTO mascota (nombre, edad,fk1_persona_id)values
('Hasan',4,2),
('Patitas',3,1);


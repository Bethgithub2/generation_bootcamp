
-- CREATE DATABASE generation_bootcamp;

-- USE generation_bootcamp ;

-- CREATE TABLE cohorte12(cohorte12_id int NOT NULL auto_increment, alumnos_id int NOT NULL, PRIMARY KEY (cohorte12_id));

/*--Este es un comentario de linea--
comentarios de mas de una linea
*/

-- INSERT INTO `generationn_bootcamp`.`cohorte12` (`alumnos_id`) VALUES ('125');
-- INSERT INTO `generationn_bootcamp`.`cohorte12` (`alumnos_id`) VALUES ('52');

/*
ALTER TABLE `generationn_bootcamp`.`cohorte12` 
ADD COLUMN `instructor_id` INT NOT NULL AFTER `alumnos_id`,
ADD COLUMN `numero_alumnos` INT NOT NULL AFTER `instructor_id`,
ADD COLUMN `horario` CHAR(10) NOT NULL AFTER `numero_alumnos`,
ADD COLUMN `tipo_sesiones` VARCHAR(255) NOT NULL AFTER `horario`,
ADD COLUMN `ciudad` VARCHAR(255) NOT NULL AFTER `tipo_sesiones`;*/


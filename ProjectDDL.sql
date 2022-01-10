-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema carrentalsystem
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema carrentalsystem
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `carrentalsystem` DEFAULT CHARACTER SET utf8 ;
USE `carrentalsystem` ;

-- -----------------------------------------------------
-- Table `carrentalsystem`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrentalsystem`.`user` (
  `user_id` INT UNSIGNED NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carrentalsystem`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrentalsystem`.`admin` (
  `admin_id` INT UNSIGNED NOT NULL,
  `fname` VARCHAR(45) NOT NULL,
  `sex` VARCHAR(45) NOT NULL,
  `bdate` DATE NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`admin_id`),
  CONSTRAINT `adminTo user`
    FOREIGN KEY (`admin_id`)
    REFERENCES `carrentalsystem`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carrentalsystem`.`car`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrentalsystem`.`car` (
  `plate_id` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `model` VARCHAR(45) NULL DEFAULT NULL,
  `color` VARCHAR(45) NULL DEFAULT NULL,
  `year` DATE NULL DEFAULT NULL,
  `rate` FLOAT NULL DEFAULT NULL,
  `car_status` VARCHAR(255) NULL DEFAULT NULL,
  `img` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`plate_id`),
  UNIQUE INDEX `plate id_UNIQUE` (`plate_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carrentalsystem`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrentalsystem`.`customer` (
  `customer_id` INT UNSIGNED NOT NULL,
  `fname` VARCHAR(45) NOT NULL,
  `sex` VARCHAR(45) NOT NULL,
  `bdate` DATE NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`customer_id`),
  CONSTRAINT `CustomerToUser`
    FOREIGN KEY (`customer_id`)
    REFERENCES `carrentalsystem`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carrentalsystem`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrentalsystem`.`reservation` (
  `reservation_number` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `plate_id` VARCHAR(45) NOT NULL,
  `pickup_date` DATE NOT NULL,
  `return_date` DATE NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `payment` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`plate_id`, `pickup_date`),
  UNIQUE INDEX `reservationNo_UNIQUE` (`reservation_number` ASC) VISIBLE,
  INDEX `ReservationToUser_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `ReservationToPlate`
    FOREIGN KEY (`plate_id`)
    REFERENCES `carrentalsystem`.`car` (`plate_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ReservationToUser`
    FOREIGN KEY (`user_id`)
    REFERENCES `carrentalsystem`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

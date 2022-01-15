-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-01-2022 a las 19:14:23
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `superheroes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heroes`
--

CREATE TABLE `heroes` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `hero_name` varchar(100) NOT NULL,
  `actor_name` varchar(100) NOT NULL,
  `nation` varchar(100) NOT NULL,
  `cell_phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `heroes`
--

INSERT INTO `heroes` (`id`, `image`, `hero_name`, `actor_name`, `nation`, `cell_phone`) VALUES
(1, '\\assets\\images\\spiderman.jpg', 'Spiderman', 'Tom Holland', 'Estados Unidos', '948524578'),
(2, '\\assets\\images\\ironman.jpg', 'Iron Man', 'Robert Downey Jr.', 'Estados Unidos', '645187849'),
(3, '\\assets\\images\\capitan.jpg', 'Capitán América', 'Chris Evans', 'Estados Unidos', '864875358'),
(4, '\\assets\\images\\thor.jpg', 'Thor', 'Chris Hemsworth', 'Estados Unidos', '998746815');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

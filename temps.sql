-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2017 at 03:37 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beerTemps`
--

-- --------------------------------------------------------

--
-- Table structure for table `temps`
--

CREATE TABLE `temps` (
  `Id` int(11) NOT NULL,
  `temp` int(50) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temps`
--

INSERT INTO `temps` (`Id`, `temp`, `date`, `time`) VALUES
(5, 100, '2017-03-27', '08:00:00.000000'),
(6, 110, '2017-03-27', '08:00:00.000000'),
(7, 110, '2017-03-27', '08:05:00.000000'),
(8, 110, '2017-03-27', '08:10:00.000000'),
(9, 127, '2017-03-27', '08:15:00.000000'),
(10, 133, '2017-03-27', '08:20:00.000000'),
(11, 122, '2017-03-27', '08:25:00.000000'),
(12, 126, '2017-03-27', '08:30:00.000000'),
(13, 167, '2017-03-27', '08:35:00.000000'),
(14, 155, '2017-03-27', '08:40:00.000000'),
(15, 123, '2017-03-27', '08:45:00.000000'),
(16, 90, '2017-03-27', '08:50:00.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `temps`
--
ALTER TABLE `temps`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `temps`
--
ALTER TABLE `temps`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

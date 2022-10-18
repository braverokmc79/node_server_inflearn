create user `node_inflearn`@`localhost` identified by '1111';
  
create database node_inflearn CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  
grant all privileges on node_inflearn.* to `node_inflearn`@`localhost` ;



CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) unique NOT NULL,
  `email` varchar(30) unique NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

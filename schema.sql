create user `node_inflearn`@`localhost` identified by '1111';
  
create database node_inflearn CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  
grant all privileges on node_inflearn.* to `node_inflearn`@`localhost` ;



CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) ,
  `email` varchar(30) unique NOT NULL,
  `password` varchar(100),
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;


CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) ,
  `type` varchar(10),
  `grade` varchar(5),
  `actor` varchar(30),
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;




INSERT INTO MOVIE (TITLE,`type`,GRADE,ACTOR) VALUES
	 ('master','action','9.10','leebyunghun'),
	 ('moonlight','drama','9.52','Barry Jenkins'),
	 ('wall-E','animation','8.33','robot'),
	 ('Zootopia','adventure','9.93','Judy hops'),
	 ('The Sound Of Music','musical','9.92','Julie Andrews');












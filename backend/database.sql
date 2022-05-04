DROP TABLE IF EXISTS favourite_sports;

CREATE TABLE `favourite_sports`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `sport_id` varchar(255) NOT NULL,
  `favourite` tinyint(1) NOT NULL,
  PRIMARY KEY(`id`)
);


INSERT INTO favourite_sports (id, sport_id, favourite) VALUES (1, 'abc123', true);

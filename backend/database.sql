DROP TABLE IF EXISTS favourite_locations;

CREATE TABLE `favourite_locations`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `location_id` varchar(255) NOT NULL,
  `favourite` tinyint(1) NOT NULL,
  PRIMARY KEY(`id`)
);


INSERT INTO favourite_locations (id, location_id, favourite) VALUES (1, 'abc123', true);

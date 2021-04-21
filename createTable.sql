use schedule;
CREATE TABLE schedule (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  dayOfWeek int(1),
  start_at time,
  end_at time,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
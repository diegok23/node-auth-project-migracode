
CREATE TABLE authDB (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(40) NOT NULL,
  email     VARCHAR(120) NOT NULL,
  password  VARCHAR(120) NOT NULL
);

INSERT INTO authDB (name, email, password) VALUES
    ('Diego', 'diego@ivan.com', '$2b$10$2u7rhZcjMixy7e1rZkO40OqUK98j6QpqaLY74xYn5CLlc2MWxySmO');
    
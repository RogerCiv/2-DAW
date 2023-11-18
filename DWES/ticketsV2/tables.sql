-- Tabla para Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('cliente', 'trabajador', 'admin') NOT NULL
);

-- Tabla para Tickets
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    status ENUM('abierto', 'cerrado') NOT NULL DEFAULT 'abierto',
    id_trabajador INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabla para Responses
CREATE TABLE responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT,
    user_id INT,
    response_text TEXT NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabla para Ratings
CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT,
    user_id INT,
    rating INT NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

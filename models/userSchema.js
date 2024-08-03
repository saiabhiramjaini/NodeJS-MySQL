const connection = require("../db/connect")

const createTables = `
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`

connection.query(createTables, (err, results) => {
    if (err) {
        console.error('Error creating tables:', err);
    } else {
        console.log('users tables created or already exist');
    }
    connection.end();
});

module.exports = createTables;
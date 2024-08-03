const connection = require("../db/connect")

const createTables = `
CREATE TABLE IF NOT EXISTS Fruits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fruit VARCHAR(255) NOT NULL UNIQUE,
    price INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`

connection.query(createTables, (err, results) => {
    if (err) {
        console.error('Error creating tables:', err);
    } else {
        console.log('Fruits table created or already exist');
    }
    connection.end();
});

module.exports = createTables;

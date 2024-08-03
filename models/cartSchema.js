const connection = require("../db/connect")

const createTables = `
CREATE TABLE IF NOT EXISTS Cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    fruit_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (fruit_id) REFERENCES Fruits(id)
);
`

connection.query(createTables, (err, results) => {
    if (err) {
        console.error('Error creating tables:', err);
    } else {
        console.log('Carts tables created or already exist');
    }
    connection.end();
});

module.exports = createTables;
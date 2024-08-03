const connection = require("../db/connect");

const addFruits = async (req, res) => {
    try {
        const { fruit, price } = req.body;

        // Validate input
        if (!fruit || !price) {
            return res.status(400).json({ msg: "Fruit and price are required" });
        }

        // Insert the fruit into the database
        const addFruitQuery = `
            INSERT INTO Users (fruit, price)
            VALUES (?, ?)
        `;

        connection.query(addFruitQuery, [fruit, price], (err, results) => {
            if (err) {
                console.error('Error adding fruit to database:', err);
                return res.status(500).json('Internal Server error');
            }

            return res.json({ msg: "Fruit added successfully" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

module.exports = { addFruits };

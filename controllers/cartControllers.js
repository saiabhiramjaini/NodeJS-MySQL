const connection = require("../db/connect");

const addToCart = async (req, res) => {
    try {
        const { user_id, fruit_id } = req.body;

        // Validate input
        if (!user_id || !fruit_id) {
            return res.status(400).json({ msg: "User ID and Fruit ID are required" });
        }

        // Insert into Cart table with SQL injection vulnerability
        const addToCartQuery = `
            INSERT INTO Cart (user_id, fruit_id)
            VALUES (${user_id}, ${fruit_id})
        `;

        connection.query(addToCartQuery, (err, results) => {
            if (err) {
                console.error('Error adding to cart:', err);
                return res.status(500).json('Internal Server error');
            }

            return res.json({ msg: "Fruit added to cart successfully" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

module.exports = { addToCart };

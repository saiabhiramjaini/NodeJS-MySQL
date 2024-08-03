const connection = require("../db/connect");

const signin = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Validate input
        if (!email || !username || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Insert the user into the database
        const createUserQuery = `
            INSERT INTO Users (email, username, password)
            VALUES (?, ?, ?)
        `;

        connection.query(createUserQuery, [email, username, password], (err, results) => {
            if (err) {
                console.error('Error inserting user into database:', err);
                return res.status(500).json('Internal Server error');
            }

            return res.json({ msg: "User registered successfully" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

module.exports = { signin };

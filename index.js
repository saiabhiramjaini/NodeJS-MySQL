const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoutes"); 
const cartRouter = require("./routes/cartRoutes");
const fruitRouter = require("./routes/fruitsRoutes");
const connection = require("./db/connect");
//const createTables = require("./models/cartSchema");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/ap1/v1/fruits", fruitRouter);

connection;
//createTables;

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
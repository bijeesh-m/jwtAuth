const express = require("express");

const authRoute = require("./routes/auth.route");
const bookRoute = require("./routes/book.route");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/auth", authRoute);
app.use("/books", bookRoute);

app.get("/", (req, res) => {
    res.render("index", { name: "John", age: 24 });
});

app.listen(4000, () => {
    console.log("server is running on port 4000!");
});

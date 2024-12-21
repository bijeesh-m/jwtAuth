

const jwt = require("jsonwebtoken");
const { users } = require("../data");

module.exports.register = (req, res) => {
    try {
        users.push(req.body);
        res.send(users);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports.login = (req, res) => {
    try {
        const name = req.body.name;
        const user = users.find((user) => user.name === name);

        if (user) {
            const token = jwt.sign({ name: user.name, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1hr" });
            res.cookie("authToken", token, { expiresIn: "1hr" });
            res.send("Login success!");
        } else {
            res.send("User not found!");
        }
    } catch (error) {
        console.log(error.message);
    }
};

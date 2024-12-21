const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.cookies.authToken;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(401).send("invalid token!");
            } else {
                console.log(data);
                req.role = data.role;
                next();
            }
        });
    } else {
        res.status(401).send("User not authenticated!");
    }

    // const isLogin = true;
    // if (isLogin) {
    //     next();
    // } else {
    //     res.send("Login first!");
    // }
};

module.exports = authenticate;

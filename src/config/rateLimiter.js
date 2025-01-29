const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5,
    message: "Too many requests, please try again later.",
});

module.exports = apiLimiter;

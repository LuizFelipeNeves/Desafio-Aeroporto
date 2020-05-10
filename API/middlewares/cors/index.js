module.exports = () => (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // POST, PUT, PATCH, HEAD, DELETE, OPTIONS
    res.header("Access-Control-Allow-Methods", "GET");
    // multipart/form-data, application/x-www-form-urlencoded,
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept, application/json, text/plain");
    next();
};

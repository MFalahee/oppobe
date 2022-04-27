async function authMiddleware(req, res , next) {
    try {
        //putting in fake auth middleware for now in order to test the google api and see how it works
        if (process.env.NODE_ENV === 'dev') {
            // dev mode
            req.user = {type: 'admin'};
            console.log(req.headers);
            next()
        } else {
            res.status(401).json({message: 'Unauthorized'});
            // real auth middleware
        }
    }
    catch {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

module.exports = authMiddleware
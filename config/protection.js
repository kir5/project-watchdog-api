module.exports = {
    protection : function(req, res, next)
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        res.redirect('http://localhost:3000/home');
    }
}

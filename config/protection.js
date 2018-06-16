module.exports = {
    protection : function(req, res, next)
    {
        if(req.isAuthenticated())
        {
            return next();            
        }
        res.redirect('https://projectwatchdog.herokuapp.com/home');
    }
}


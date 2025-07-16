const isSignedIn = (req, res, next) => {
    if (req.session.user) return next()
        res.resirect('/auth/sign-in')
}

module.exports = isSignedIn
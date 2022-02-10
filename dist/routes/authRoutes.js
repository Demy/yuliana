const basicAuth = require('express-basic-auth');
const auth = basicAuth({
    users: {
        admin: '123',
        user: '456',
    },
});
module.exports = app => {
    app.get('/authenticate', auth, (req, res) => {
        if (req.auth.user === 'admin') {
            res.send('admin');
        }
        else if (req.auth.user === 'user') {
            res.send('user');
        }
    });
};
//# sourceMappingURL=authRoutes.js.map
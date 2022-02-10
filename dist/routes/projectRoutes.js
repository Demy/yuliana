const projects = require('../services/projects');
module.exports = app => {
    app.post('/project', (req, res) => {
        const id = req.body.id;
        console.log('Get project: ' + JSON.stringify(id));
        projects.getProject(id).then((results) => {
            let result = null;
            if (results.length > 0) {
                result = results[0];
            }
            res.send(result);
        }, (error) => {
            res.status(500).send(error);
        });
    });
    app.put('/project', (req, res) => {
    });
};
//# sourceMappingURL=projectRoutes.js.map
'use strict';

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/projects",
    (req, res) => {
      const fs = require('fs');
      
      let rawdata = fs.readFileSync('projects.json');
      let projects = JSON.parse(rawdata);

      res.send(projects);
    }
  );
};

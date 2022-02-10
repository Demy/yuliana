const db = require('./db');
function getProject(id) {
    return db.query(`SELECT * FROM projects WHERE id=${id} LIMIT 1`);
}
;
function setProject(sceneId, userId) {
    // return db.query(
    //   `UPDATE projects SET scene = ${sceneId} WHERE id=${userId}`
    // );
}
;
module.exports = {
    getProject,
    setProject,
};
//# sourceMappingURL=projects.js.map
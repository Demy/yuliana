const db = require('./db');

function getProject(id: Number) {
  return db.query(
    `SELECT * FROM projects WHERE id=${id} LIMIT 1`
  );
};

function setProject(sceneId: Number, userId: Number) {
  // return db.query(
  //   `UPDATE projects SET scene = ${sceneId} WHERE id=${userId}`
  // );
};
 
module.exports = {
  getProject,
  setProject,
};
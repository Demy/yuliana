const config = require('../config/db');
const mysql = require('mysql');
const pool = mysql.createPool(Object.assign({ connectionLimit: 60, multipleStatements: true }, config.db));
function query(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (err, rows) {
                connection.release();
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    });
}
function escapeText(text) {
    return mysql.escape(text);
}
module.exports = {
    query,
    escapeText,
};
//# sourceMappingURL=db.js.map
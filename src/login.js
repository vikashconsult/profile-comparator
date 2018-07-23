const jsforce = require('jsforce');

module.exports = async (username = 'xxxxxx.com', password = 'xxxxxx#123') => {
  let conn = new jsforce.Connection({
    loginUrl: 'https://login.salesforce.com'
  });
  await conn.login(username, password);
  return conn;
};

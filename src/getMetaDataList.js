const login = require('./login');

module.exports = async (pType = 'Profile') => {
  let conn = await login();
  console.log(conn);
  let types = [{ type: pType, folder: null }];
  return await conn.metadata.list(types, '39.0');
};

const metaDataList = require('./getMetaDataList');
const login = require('./login');

module.exports = async (pType = 'Profile', metadataName = []) => {
  let list = await metaDataList();
  console.log(list);
  var metaDataNames = [];
  list.forEach(function(meta) {
    console.log(meta.fullName);
    metaDataNames.push(meta.fullName);
  });

  
  let conn = await login();
  console.log(conn);
  return await conn.metadata.read(pType, metaDataNames);
};

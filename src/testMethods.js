const profileMethod = require('./getMetaDataList');
const profileMethodJSON = require('./getMetaDataJson');

(function() {
  //profileMethod().then(console.log);
  profileMethodJSON().then(console.log);
})();

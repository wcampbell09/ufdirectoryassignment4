//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://wcamp:1234@ds127034.mlab.com:27034/ufdirectory', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: ''
  },
  port: 8080
};

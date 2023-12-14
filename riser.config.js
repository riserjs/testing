module.exports = ( mode ) => {
  return {
    appname: 'test',
    development: {
      port: 3000
    },
    mqtt: {
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'root'
    },
    mongodb: {
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'root'
    }
  }
}
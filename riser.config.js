module.exports = ( mode ) => {
  return {
    appname: 'test',
    development: {
      port: 3000
    },
    broker: {
      name: 'mqtt',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'root'
    }
  }
}
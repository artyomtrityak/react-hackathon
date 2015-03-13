module.exports = {
  port: 3000,
  ip: '127.0.0.1',
  securePort : 8433,
  tokenSecret: process.env.tokenSecret || 'A hard to guess string',
  sessionSecret: 'dev'
};

var config;

if (process.env.NODE_ENV === 'development') {
  config = require('./development');
} else if (process.env.NODE_ENV === 'production') {
  config = require('./production');
} else {
  throw new Error('Unknown NODE_ENV');
}

module.exports = config;
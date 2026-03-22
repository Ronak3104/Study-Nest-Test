const env = require('./env');

const corsOptions = {
  origin: [env.frontendUrl],
  credentials: true
};

module.exports = corsOptions;
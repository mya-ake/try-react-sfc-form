/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const PROJECT_DIR = process.cwd();

const applyAlias = (config) => {
  config.resolve.alias['~'] = path.join(PROJECT_DIR, 'src');
};

module.exports = {
  webpack(config) {
    applyAlias(config);
    return config;
  },
};

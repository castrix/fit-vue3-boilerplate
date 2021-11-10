/* eslint-disable no-undef */
// fileTransformer.js
import path from 'path'

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  }
}

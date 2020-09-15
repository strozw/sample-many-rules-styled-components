const {
  override,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    'styled-components': path.resolve(__dirname, './styled-components/packages/styled-components')
  })
)

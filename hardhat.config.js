// https://eth-rinkeby.alchemyapi.io/v2/RJTOkMcceoTIWbQtGStFaF0De6MIXhLC

require('@nomiclabs/hardhat-waffle');
const privateId = import.meta.env.PRIVATE_KEY;

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/RJTOkMcceoTIWbQtGStFaF0De6MIXhLC',
      accounts: []
    }
  }
}

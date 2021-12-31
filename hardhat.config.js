// https://eth-rinkeby.alchemyapi.io/v2/RJTOkMcceoTIWbQtGStFaF0De6MIXhLC

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/RJTOkMcceoTIWbQtGStFaF0De6MIXhLC',
      accounts: ['7bd6373689fe7d5dd95d34fe937769d5cdbe0461514c06e747416c1b189ed9f3']
    }
  }
}

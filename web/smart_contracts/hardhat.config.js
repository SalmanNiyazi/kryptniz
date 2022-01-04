//https://eth-ropsten.alchemyapi.io/v2/uplR5YIQKDAhbLHTVhizdS60H88Sn-A4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uplR5YIQKDAhbLHTVhizdS60H88Sn-A4',
      accounts: [ 'be6f63d480d824abd13f373a366699f9abd79ee199a813583e0cae0ca173db1c' ]
    }
  }
}
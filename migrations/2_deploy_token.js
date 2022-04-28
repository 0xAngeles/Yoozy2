var Yoozy2 = artifacts.require("./Yoozy2.sol");

module.exports = function (deployer) {
  const _name = 'Yoozy2';
  const _symbol = 'UZT'
  
  deployer.deploy(Yoozy2, _name, _symbol);
};

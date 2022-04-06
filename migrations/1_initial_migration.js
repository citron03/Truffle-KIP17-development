const Migrations = artifacts.require('Migrations');
const MyKlaytnNFTs = artifacts.require('MyKlaytnNFTs.sol'); 

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(MyKlaytnNFTs); 
};
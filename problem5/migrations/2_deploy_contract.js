const UtilityContract = artifacts.require('./UtilityContract');

module.exports = (deployer) => deployer.then(() => deployUtilityContract(deployer));

function deployUtilityContract(deployer) {
  deployer.deploy(UtilityContract)
};
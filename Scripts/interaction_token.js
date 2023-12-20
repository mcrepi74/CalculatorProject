const Token = artifacts.require("Token");

module.exports = async function(callback) {
  try {
    // Récupérer l'instance du contrat
    const tokenInstance = await Token.deployed();

    // Appeler des fonctions du contrat ERC20
    const totalSupply = await tokenInstance.totalSupply();
    console.log("Total Supply du Token : ", totalSupply.toNumber());
  } catch (error) {
    console.error(error);
  }

  // Indiquer que le script est terminé
  callback();
};

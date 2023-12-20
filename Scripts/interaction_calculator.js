const Calculator = artifacts.require("Calculator");

module.exports = async function(callback) {
  try {
    // Récupérer l'instance du contrat
    const calculatorInstance = await Calculator.deployed();

    // Appeler des fonctions du contrat
    const additionResult = await calculatorInstance.add(3, 4);
    console.log("Résultat de l'addition : ", additionResult.toNumber());

    const multiplicationResult = await calculatorInstance.multiply(5, 6);
    console.log("Résultat de la multiplication : ", multiplicationResult.toNumber());
  } catch (error) {
    console.error(error);
  }

  // Indiquer que le script est terminé
  callback();
};

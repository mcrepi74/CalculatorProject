// calculator.js
const Calculator = artifacts.require("Calculator");

contract("Calculator", () => {
  it("should add two numbers", async () => {
    const calculatorInstance = await Calculator.deployed();
    const result = await calculatorInstance.add(3, 4);
    assert.equal(result, 7, "Addition failed");
  });

  // Ajoutez des tests similaires pour les autres opérations
});

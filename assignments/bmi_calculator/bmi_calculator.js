// This function should return the BMI for a person
function BMICalculator(mass, height) {
  // Write your code here
  mass = parseInt(mass);
  height = parseInt(height);
  if (height != 0 && mass != 0) {
    let BMI = mass / Math.pow(height, 2);
    return BMI;
  } else {
    return "INVALID INPUT";
  }
}

module.exports = BMICalculator;

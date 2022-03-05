function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence === true && isTired === false && isSober === true) {
      return "You can drive";
    } else if (
      hasDrivingLiscence === false &&
      isTired === true &&
      isSober === true
    ) {
      return "You cannot drive";
    } else if (hasDrivingLiscence === true && isSober === false) {
      return "You shouldn't drive";
    } else {
    }
  }
  
  module.exports = CanDrive;
  
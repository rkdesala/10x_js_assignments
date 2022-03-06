function CreateObject(arr) {
  // Write your code here
  details = {};
  for (let i = 0; i < arr.length; i += 2) {
    details[arr[i]] = arr[i + 1];
  }
  return details;
}
//arr = ["rama", "krishna", "desala", "10x_academy"];
//console.log(CreateObject(arr));
module.exports = CreateObject;

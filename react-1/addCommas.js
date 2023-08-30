// function addCommas(number) {
//   return number.toLocaleString("en-US");
// }

function addCommas(number) {
  let string = String(number);
  let negNum = false
  let numArr = string.split('');
  if (string[0] === "-") {
    negNum = true;
    numArr.shift(); 
  }
  let decimal = numArr.indexOf(".");
  let index;
  decimal === -1 ? index = numArr.length : index = decimal
  for (let i = index - 3; i > 0; i -= 3) {
    numArr.splice(i, 0, ",")
  }
  if (negNum) numArr.unshift("-");
  return numArr.join("");
}


// addCommas(1234);

module.exports = addCommas;
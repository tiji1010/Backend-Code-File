function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
// module.exports = {
//   sum,
//   subtract
// };
module.exports.add = sum;
module.exports.sub = subtract;
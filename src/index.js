
exports.min = function min (array) {
  if (!array || array.length == 0) {
    return 0;
  }
  let otvMin = Math.min(array)
  return otvMin;
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  }
  let otvMax = Math.max(array)
  return otvMax;
}

exports.avg = function avg (array) {
  if (!array || array.length() == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let otv = sum / array.length();
  return otv;
}

exports.min = function min (array) {
  if (array === undefined) {
    return 0;
  } else if (array[0] === undefined) {
    return 0;
  } else {
    let minNumb = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minNumb > array[i]) {
        minNumb = array[i];
      }
    }
  }
  if (array.length === 0){
    return 0;
  }else 
  {
    return minNumb;
  }
}

exports.max = function max (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let otv = sum / (array.length);
  return otv;
}

exports.min = function min (array) {
  if (array === undefined) {
    return 0;
  } else if (array[0] === undefined) {
    return 0;
  } else {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  }
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  } else if (array[0] === undefined) {
    return 0;
  } else {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
  } else if (array[0] === undefined) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let otv = sum / (array.length);
    return otv;
  }
}
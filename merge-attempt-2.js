function merge (arr, secondArr) {
  var finalArr = [];
  for (var i = 0; i < secondArr.length; i++) {
    arr.push(secondArr[i]);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
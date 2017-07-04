function merge (firstArray, secondArray) {
  var finalArray = [];
  var count = 0;
  var countTwo = 0;
  if (firstArray === undefined) {
    return secondArray;
  } else if (secondArray === undefined) {
    return firstArray;
  } else if (firstArray[0] <= secondArray[0]) {
    while (firstArray[count] <= secondArray[0] && firstArray[count] !== undefined) {
      finalArray.push(firstArray[count]);
      count += 1;
    }
    while (secondArray[countTwo] !== undefined) {
      finalArray.push(secondArray[countTwo]);
      countTwo += 1;
    }
    while (firstArray[count] !== undefined) {
      finalArray.push(firstArray[count]);
      count += 1;
    }
    return finalArray;
  } else {
    while (secondArray[count] <= firstArray[0] && secondArray[count] !== undefined) {
      finalArray.push(secondArray[count]);
      count += 1;
    }
    while (firstArray[countTwo] !== undefined) {
      finalArray.push(firstArray[countTwo]);
      countTwo += 1;
    }
    while (secondArray[count] !== undefined) {
      finalArray.push(secondArray[count]);
      count += 1;
    }
    return finalArray;
  }
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

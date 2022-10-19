// 343. Integer Break
n = 10;

var integerBreak = function(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  } else if (n === 6) {
    return 9;
  } else if (n === 8) {
    return 18;
  }

  let partialSum = Math.sqrt(n);
  partialSum = Math.floor(partialSum);

  const numsToFactor = [];

  let currentInt = partialSum;
  let sumOfNums = 0;

  // establish an approximate square root with the last index as remainder
  // this makes a starting point for the initial indexes to start factoring
  for (let i = 1; i < partialSum; i++) {
    numsToFactor.push(currentInt);

    if (i === partialSum - 1) {
      numsToFactor.forEach((result) => {
        sumOfNums += result;
      });

      while (sumOfNums + currentInt !== n) {
        currentInt++;
      }

      // basically this function is dividing the remainder
      // near the end of the current array to add to the indexes
      var roundOutIndexes = function(remainderInt) {
        if (remainderInt % 2 === 0) {
          let deplete = remainderInt;
          while (deplete > 0) {
            numsToFactor.push(2);
            deplete -= 2;
          }
        } else if (remainderInt % 3 === 0) {
          let deplete = remainderInt;
          while (deplete > 0) {
            numsToFactor.push(3);
            deplete -= 3;
          }
        } else if (remainderInt % 5 === 0) {
          let deplete = remainderInt;
          while (deplete > 0) {
            numsToFactor.push(3);
            numsToFactor.push(2);
            deplete -= 5;
          }
        } else if (remainderInt % 7 === 0) {
          let deplete = remainderInt;
          while (deplete > 0) {
            numsToFactor.push(3);
            numsToFactor.push(2);
            numsToFactor.push(2);
            deplete -= 7;
          }
        }
      }

      roundOutIndexes(currentInt);
    }
  }

  // this function calculates the product of all ints in an array
  var tallyProduct = function(arr) {
    let totalVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      totalVal *= arr[i];
    }
    return totalVal;
  }

  console.log(numsToFactor);
  const totalVal = tallyProduct(numsToFactor);
  return totalVal;
};

integerBreak(n);
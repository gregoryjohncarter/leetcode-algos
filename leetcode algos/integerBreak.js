// 343. Integer Break
// n = 10;
n = 25;

var integerBreak = function(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  } else if (n === 6) {
    return 9;
  }

  let partialSum = Math.sqrt(n);
  partialSum = Math.floor(partialSum);

  const numsToFactor = [];

  let currentInt = partialSum;
  let sumOfNums = 0;

  // my solution hinges from using a rounded down sq. root for the early indexes
  // once the early indexes are added, the last index (remainder) is then divvied up into 2s and 3s
  // see next 2 comments for breakdown
  for (let i = 1; i < partialSum; i++) {
    numsToFactor.push(currentInt);

    // before the loop ends, add to the remainder(last index) until sum of all ints in array = n
    if (i === partialSum - 1) {
      numsToFactor.forEach((result) => {
        sumOfNums += result;
      });

      while (sumOfNums + currentInt !== n) {
        currentInt++;
      }

      // this function then divides up that remainder into 3s and 2s
      var convertRemainder = function(remainderInt) {
        let deplete = remainderInt;
        if (remainderInt % 3 === 0) {
          while (deplete > 0) {
            numsToFactor.push(3);
            deplete -= 3;
          }
        } else if (remainderInt % 2 === 0) {
          while (deplete > 0) {
            numsToFactor.push(2);
            deplete -= 2;
          }
        } else {
          // else the remainder isnt divisible by 2 or 3 w/o remainder
          while (deplete > 0) {
            if (deplete > 5) {
              numsToFactor.push(3);
              deplete -= 3;
            } else if (deplete === 5) {
              numsToFactor.push(3);
              numsToFactor.push(2);
              deplete -= 5;
            } else if (deplete === 4) {
              numsToFactor.push(2);
              numsToFactor.push(2);
              deplete -= 4;
            } else if (deplete === 3) {
              numsToFactor.push(3);
              deplete -= 3;
            } else {
              numsToFactor.push(2);
              deplete -= 2;
            }
          }
        }
      }

      convertRemainder(currentInt);
    }
  }

  // while my earlier solution was working well n < 16
  // it was not accurate if the early indexes were > 3
  // this function brings down arr[i] if > 3 
  // while creating new indexes with the remainder
  var earlyShift = function() {
    let i = 0;
    let remainder = 0;
    let placekeeper = null;

    while (i < numsToFactor.length) {
      while (numsToFactor[i] > 3) {
        numsToFactor[i]--;
        remainder++;
        placekeeper = i;
      }    
      i++
    }

    while (remainder > 0) {
      while (remainder > 5) {
        numsToFactor.splice(placekeeper + 1, 0, 3);
        remainder -= 3;
      } 
      if (remainder === 5) {
        numsToFactor.splice(placekeeper + 1, 0, 3);
        numsToFactor.splice(placekeeper + 2, 0, 2);
        remainder -= 5;
      } else if (remainder === 4) {
        numsToFactor.splice(placekeeper + 1, 0, 2);
        numsToFactor.splice(placekeeper + 2, 0, 2);
        remainder -= 4;
      } else if (remainder === 3) {
        numsToFactor.splice(placekeeper + 1, 0, 3);
        remainder -= 3;
      } else {
        numsToFactor.splice(placekeeper + 1, 0, 2);
        remainder -= 2;
      }
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

  earlyShift();
  const totalVal = tallyProduct(numsToFactor);

  return totalVal;
};

integerBreak(n);
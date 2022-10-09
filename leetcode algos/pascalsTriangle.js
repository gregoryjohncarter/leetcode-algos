// 118. Pascal's Triangle
numRows = 5;

var generate = function(numRows) {
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }

  var starter = [[1]];

  starter.push([1, 1]);

  function constructMid(arrayContent, numRows) {
    let midCols = numRows - 2;
    let rowIndex = 1;

    while (midCols > 0) {
      var addToMid = [];

      for (let x = 0; x < arrayContent[rowIndex].length - 1; x++) {
        addToMid.push(arrayContent[rowIndex][x] + arrayContent[rowIndex][x + 1]);
      }

      addToMid.unshift(1);
      addToMid.push(1);
      arrayContent.push(addToMid);

      midCols--;
      rowIndex++;
    }
  }

  if ((numRows % 2) !== 0) {
    constructMid(starter, numRows);

    return starter;
  } else {
    numRows += 1;
    constructMid(starter, numRows);
    starter.pop();

    return starter;
  }
};

generate(numRows);
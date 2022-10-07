// 14. Longest Common Prefix
strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function(strs) {
  var prefixMap = {};

  var previWord = strs[0].split('');
  var currentWord = null;

  var longestPrefix = '';

  // first check if there is more than one string in the array
  if (strs.length <= 1) {
    return false;
  }

  var checkLetter = previWord[0];
  // also check if all strings share the first letter in common, otherwise return false
  for (let i = 1; i < strs.length; i++) {
    var currentCheck = strs[i].split('');
    currentCheck = currentCheck[0];

    if (currentCheck !== checkLetter) {
      return false;
    }
    checkLetter = currentCheck;
  }

  for (let i = 1; i < strs.length; i++) {
    currentWord = strs[i].split('');

    for (let x = 0; x < currentWord.length; x++) {
      if (previWord[x] === currentWord[x]) {
        longestPrefix += currentWord[x];
        // keep track of how many words share the same prefixes, letter by letter
        prefixMap[longestPrefix] = (prefixMap[longestPrefix] + 1) || 1;
      } else {
        break;
      }
    }

    // near the end of this 'primary' loop of the algorithm (for length of strs array)
    // we change the current to become previous for placekeeping and also reset the prefix var
    previWord = currentWord;
    longestPrefix = '';
  }

  // use another placekeeper to determine the longest common prefix
  var placekeeperPrefix = '';
  Object.keys(prefixMap).forEach((prefix) => {
    if (prefix.length >= placekeeperPrefix.length && prefixMap[prefix] === (strs.length - 1)) {
      placekeeperPrefix = prefix;
    }
  });

  return placekeeperPrefix;
}

longestCommonPrefix(strs);
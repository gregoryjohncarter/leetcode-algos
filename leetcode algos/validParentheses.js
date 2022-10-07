// 20. Valid Parentheses
s = "(]"

var isValid = function(s) {
  // use a secondary function to validate possible pairs
  const pairTypes = function(twoChars) {
    const [firstChar, secondChar] = twoChars;
    if (firstChar === '(') {
      return secondChar === ')';
    } else if (firstChar === '[') {
      return secondChar === ']';
    } else if (firstChar === '{') {
      return secondChar === '}';
    }
    return false;
  }

  // check for even length of characters
  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let twoCharacters = s.split('');
    twoCharacters = [s[i], s[i+1]];

    let placeholderCheck = true;
    placeholderCheck = pairTypes(twoCharacters);

    if (!placeholderCheck) {
      return false;
    }
    i++;
  }

  return true;
};

isValid(s);
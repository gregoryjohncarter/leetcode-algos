// 1071. Greatest Common Divisor Of Strings
str1 = "ABCABC";
str2 = "ABC";

var gcdOfStrings = function(str1, str2) {
  const content1 = str1.split('');
  const content2 = str2.split('');

  let divisor = str1.length;

  for (let i = str1.length; i >= 0; i--) {
    if (str2.length % divisor === 0 && str1.length % divisor === 0) {
      break;
    }

    divisor--;
  }

  if (divisor === 1) {
    return '';
  }
 
  const divisorArr = [];

  for (let i = 0; i < divisor; i++) {
    divisorArr.push(content1[i]);
  }

  return divisorArr.join('');
};

gcdOfStrings(str1, str2);
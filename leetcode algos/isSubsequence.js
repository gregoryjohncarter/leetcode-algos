// 392. Is Subsequence
s = "abc";
t = "ahbgdc";

var isSubsequence = function(s, t) {
  var sContent = s.split('');
  var tContent = t.split('');

  for (let i = 0; i < s.length; i++) {
    var currentLetter = sContent[i];

    while (tContent[i] !== currentLetter) {
      tContent.splice(i, 1);
    }
  }

  if (tContent.length !== sContent.length) {
    return false;
  }

  for (let i = 0; i < sContent.length; i++) {
    if (sContent[i] !== tContent[i]) {
      return false;
    }
  }

  return true;
};

isSubsequence(s, t);
// 3. Longest Substring Without Repeating Characters
s = "pwwkew";

var lengthOfLongestSubstring = function(s) {
  const split = s.split('');

  let longestSubstring = [];
  let currentSubstring = [];

  for (let i = 0; i < s.length; i++) {
    let toggle = false;

    currentSubstring.forEach((result) => {
      if (result === split[i]) {
        toggle = true;
      }
    });

    if (toggle) {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring.splice(0, longestSubstring.length, ...currentSubstring);
      }
      currentSubstring = [];
      currentSubstring.push(split[i]);
    } else {
      currentSubstring.push(split[i]);
    }
  }

  if (!longestSubstring.length) {
    return 1;
  } else {
    return longestSubstring.length;
  }
};

lengthOfLongestSubstring(s);
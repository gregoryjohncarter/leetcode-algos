// 205. Isomorphic Strings
s = "foo";
t = "bar";

var isIsomorphic = function(s, t) {
  var sCountMap = {};
  var potentialShifts = 0;

  var tCountMap = {};
  var requiredShifts = 0; 

  var sArray = s.split('');
  var tArray = t.split('');

  for (let i = 0; i < sArray.length; i++) {
    sCountMap[sArray[i]] = (sCountMap[sArray[i]] + 1) || 1;
  }

  for (let key in sCountMap) {
    if (sCountMap[key] !== tCountMap[key]) {
      potentialShifts += 1;
    }
  }

  for (let i = 0; i < tArray.length; i++) {
    tCountMap[tArray[i]] = (tCountMap[tArray[i]] + 1) || 1;
  }

  for (let key in tCountMap) {
    if (sCountMap[key]) {
      requiredShifts += (tCountMap[key] - sCountMap[key]);
    } else {
      requiredShifts += 1;
    }
  }

  potentialShifts -= requiredShifts;

  if (potentialShifts >= 0) {
    return true;
  } else {
    return false;
  }
};

isIsomorphic(s, t);
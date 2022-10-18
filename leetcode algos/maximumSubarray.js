// 53. Maximum Subarray
nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    currentSum = Math.max(currentSum + currentNum, currentNum);

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;;
};

maxSubArray(nums);
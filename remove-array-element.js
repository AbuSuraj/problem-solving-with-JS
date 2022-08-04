var nums=[0,1,2,2,3,0,4,2];
const val = 2;
for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
     nums.splice(i, 1);
    }
   }
   console.log(nums)
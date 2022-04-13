// https://leetcode.com/study-plan/data-structure/?progress=i4lrg03
//https://leetcode.com/problems/maximum-subarray/




const maxSubArray = (nums) => {
    let max = 0;
    let loopTotal = 0;
    let j = 1;
    for (let i = 0; i < nums.length; i++) {
        loopTotal += nums[i];
        while (j < nums.length) {
            loopTotal += nums[j];
            j++;
        }

        max = Math.max(max, loopTotal);
        loopTotal = 0;
        j = i + 2;
    }
    return max
}

let input3 = [6, -1, 4, -11];
let input2 = [5, 4, -1, 7, 8];
let input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


const maxSubArray = (A) => {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}


//similar to 121. Best Time to Buy and Sell Stock
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit = (prices) => {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

console.log(maxSubArray(input1))
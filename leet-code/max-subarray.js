// https://leetcode.com/study-plan/data-structure/?progress=i4lrg03
//https://leetcode.com/problems/maximum-subarray/

const maxSubArrayTest = (nums) => {
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

//TODO: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
const maxSubArray = (A) => {
    let prev = A[0];
    let max = A[0];
    
    for (var i = 0; i < A.length; i++) {
        //i 1
        prev = Math.max(prev + A[i], A[i]);
        //6
        max = Math.max(max, prev);
        //6
    }
    return max;
}
let input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let input3 = [6, -1, 4, -11];
let input2 = [5, 4, -1, 7, 8];


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
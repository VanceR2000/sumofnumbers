"use strict";
function sumFor(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
function sumWhile(nums) {
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum;
}
function sumRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1));
}
function sumTheFunctionalWay(nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
// Show results on the page
function displayResult(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}
const numbers = [1, 2, 3, 4];
console.log('sumFor:', sumFor(numbers));
console.log('sumWhile:', sumWhile(numbers));
console.log('sumRecursion:', sumRecursion(numbers));
console.log('sumTheFunctionalWay:', sumTheFunctionalWay(numbers));
displayResult(`sumFor: ${sumFor(numbers)}`);
displayResult(`sumWhile: ${sumWhile(numbers)}`);
displayResult(`sumRecursion: ${sumRecursion(numbers)}`);
displayResult(`sumTheFunctionalWay: ${sumTheFunctionalWay(numbers)}`);

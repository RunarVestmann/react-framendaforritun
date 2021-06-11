const numberArray = [1, 2, 3];

// map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const changedArray = numberArray.map((value) => value + 10);
console.log('original array: ', numberArray);
console.log('mapped array: ', changedArray);

// find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
console.log(
    'first value in mapped array which is > 11:',
    changedArray.find((value) => value > 11),
);

// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
changedArray.forEach((value, index) => {
    console.log(value, index);
});

// filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log(changedArray.filter((value) => value !== 12));

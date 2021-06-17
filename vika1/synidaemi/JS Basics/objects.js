const personArray = [
    { name: 'Bob', age: 33 },
    { name: 'Eve', age: 24 },
    { name: 'John', age: 55 },
];

personArray.forEach((person) => {
    person = { name: 'Hello' };
});

console.log(personArray);

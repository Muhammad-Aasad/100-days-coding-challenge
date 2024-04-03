//Question 35: Animals: Highlight animals with a common trait.
//Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.
var animal = ["dog", "cat", "goat"];
animal.forEach(function (animal) {
    console.log("A ".concat(animal, " whould make a grat animal"));
});
console.log("Any of these animal whould make a great pet!");

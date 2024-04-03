//Question 34: Pizzas: Share your favorite pizzas and express your love for them.
//Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
var pizza = ["pepperoni ", "margherita ", "hawaiian "];
pizza.forEach(function (pizza) {
    console.log("I like ".concat(pizza, "pizza.."));
});
console.log("I Really LOve Pizza");

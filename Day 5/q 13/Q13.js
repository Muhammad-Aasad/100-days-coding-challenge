<<<<<<< HEAD
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport = ["Honda", "Tesla", "Bicycle"];
transport.forEach(function (transport) {
    console.log("I whould like to own a ".concat(transport));
=======
//Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
>>>>>>> a6acc930ac4b9d568b6126dc20e359c2ed9f3033
});

//Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});

//Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.

let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
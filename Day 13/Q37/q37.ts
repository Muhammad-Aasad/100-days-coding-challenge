//Question 37: Large Shirts: Default values in make_shirt().

//Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
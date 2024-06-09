// Making a Function 
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Calling a function with by-Default values
make_shirt();

// Calling a function now with medium size and default message
make_shirt("Medium")

// Calling a function now with small size and Different print message
make_shirt("Small", "I Love Javascript")
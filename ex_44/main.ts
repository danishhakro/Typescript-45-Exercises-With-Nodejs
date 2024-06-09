// Define a function with a rest parameter that accept items argumnets representing our sandwich
function makeSandwich(...Items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    Items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Chatni");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Cheese", "Chatni", "Raita", "Mayo", "Vinegar");
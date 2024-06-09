// Define a function with a rest parameter that accept items argumnets representing our sandwich
function makeSandwich() {
    var Items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    Items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Chatni");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Cheese", "Chatni", "Raita", "Mayo", "Vinegar");

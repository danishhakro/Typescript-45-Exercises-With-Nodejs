// defien a function to create a car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add addinational options to the car object
    options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "Year: 2024");
// Call the function to create a car object
console.log(my_car);

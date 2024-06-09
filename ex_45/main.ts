// defien a function to create a car object with optional options...
function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add addinational options to the car object
    options.forEach(Option => {
        let [key, value] = Option.split(":");
        car[key.trim()] = value.trim();
    });

return car;

}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "Year: 2024");

// Call the function to create a car object
console.log(my_car);
// Creating a function with parameters which return a values in string
function city_country(City: string, country: string) : string{
    return `${City} , ${country}`;
}

// Calling a function in print the return value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));
// Describe a Function
function describe_city(City, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(country));
}
// Calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Los Angeles", "America");

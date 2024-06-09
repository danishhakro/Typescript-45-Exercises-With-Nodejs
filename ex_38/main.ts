// Describe a Function
function describe_city (City: string, country: string = "Pakistan"){
    console.log(`${City} is in ${country}`);
}

// Calling the function
describe_city("Karachi");

describe_city("Lahore");

describe_city("Los Angeles", "America");
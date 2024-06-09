// Define a function to print each magician name from an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// define an array containing magicians name
let magician_names = ["Harry", "Danish", "Amir khan"]

// Call the function to print each magicain name
show_magician(magician_names);
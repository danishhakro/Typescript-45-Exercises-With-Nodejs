// Define the function to show magicians names
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

// Function to amke magician great through map() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Defen an array of magicicans names 
let magician_names = ["Harry", "Danish", "Kashif"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

// Call show_magicians that show modified list of magicians
show_magicians(great_magicians)
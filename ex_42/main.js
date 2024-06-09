// Define the function to show magicians names
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Defen an array of magicicans names 
var magician_names = ["Harry", "Danish", "Kashif"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);

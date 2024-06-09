let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Turkey"];
console.log("Original Order:", countriesToVisit);

console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("Still in Original Order:", countriesToVisit);

console.log("Original Array Reversed:", countriesToVisit.reverse());

console.log("Back to Original Order:", countriesToVisit.reverse());

console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

console.log("Original Array Reversed Again:", countriesToVisit.reverse());
let guestList = ["Nadir", "Mustafa", "Kashif", "M.ali"];

let dontCome = guestList[0];

console.log(dontCome, "nahi asaktay hain");

guestList.splice(0, 1, "Amir");

console.log("Good News ! We have Found a Bigger Table for Dinner.");

guestList.unshift("Hamza");

guestList.push("Dodo");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Adeel");

console.log("Updated List of our Guests");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me`));

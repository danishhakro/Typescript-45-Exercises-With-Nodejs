let guestList = ["Nadir", "Mustafa", "Kashif", "M.ali"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi aa sakta");

guestList.splice(0, 1, "Amir");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to Dinner with me?`));

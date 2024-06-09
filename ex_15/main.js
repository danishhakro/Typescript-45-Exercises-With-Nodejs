var guestList = ["Nadir", "Mustafa", "Kashif", "M.ali"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to Dinner with me?")); });

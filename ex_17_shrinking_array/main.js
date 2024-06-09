var guestList = ["Nadir", "Mustafa", "Kashif", "M.ali"];
var dontCome = guestList[0];
console.log(dontCome, "nahi asaktay hain");
guestList.splice(0, 1, "Amir");
console.log("Good News ! We have Found a Bigger Table for Dinner.");
guestList.unshift("Hamza");
guestList.push("Dodo");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Adeel");
console.log("Updated List of our Guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me")); });
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
console.log("Invitation to the Last 2 Guests");
guestList.forEach(function (Lasttwo) { return console.log("Luckly ".concat(Lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);

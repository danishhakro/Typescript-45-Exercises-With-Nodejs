let userNames = ["Fahad", "zahoor", "Arz", "Admin", "Nadir"]

// Remove all values from our Array Now our Array is empty
userNames = []

// If Statment for checking length of our Array is empty?
if (userNames.length === 0){
    console.log("you Array is Empty We need to find some users!")
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser},thank you for logging in again.`)
        }
    })
}
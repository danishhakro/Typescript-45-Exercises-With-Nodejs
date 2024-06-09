// Array of Current Users
let current_users = ["Mehak", "Fida", "Majid", "Mahnoor", "Sheeraz"]

// Array of New Users
let new_users = ["Hamza", "Mehak", "Ayesha", "Majid", "Sheeraz"]

//Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exists and save in our_condition available
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})
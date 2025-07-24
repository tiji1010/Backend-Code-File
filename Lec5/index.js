let users = [
    {
        id: 1,
        name: "Vansh",
        age: 20
    },
    {
        id: 2,
        name: "Aarav",
        age: 17
    },
]

function isAllowed(id){
        // let user = users.find(user => user.id == id);
        // if (!user) {
        //     console.log("User not found");
        // } else {
        //     console.log(user);
        // }

        for(let i = 1; i < users.length; i++){
            if(users[i].id == id && users[i].age >= 18){
                console.log("User allowed");
                return;
            }else if(users[i].id == id && users[i].age < 18){
                console.log("User not allowed");
                return;
            }
        }  console.log("User not found");
}

isAllowed(3);
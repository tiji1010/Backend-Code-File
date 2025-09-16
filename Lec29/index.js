let {PrismaClient}=require("./generated/prisma");
let prisma=new PrismaClient();
async function addUser(name,email,password){
    let newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return newUser;
}
addUser("Saloni","Saloni@gmail.com","1234").then((data)=>{
    console.log("User created successfully");
}).catch((err)=>{
    console.log("Error");
})
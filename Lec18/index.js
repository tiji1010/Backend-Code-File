const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Blogs = require("./model/blog")
const Users = require("./model/user")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post("/blogs",async (req, res) => {
  
    let { title, body ,userId} = req.body
    let userExist = await user.findBById(userId);
    if(userExist){
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now(),
        userId:userId
    })
    await newBlog.save()
    userExist.blogs.push(newBlog._id)
    await userExist.save();
    res.json({
        success: true,
        data: newBlog,
        message: "Blog added successfully"
    })
}
})

app.post("/users", async(req, res)=>{
    let {email, username, password} = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
})

app.get("/blogs", async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id", async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
})

app.get("/users", async(req, res)=>{
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
})

app.get("/users/:id", async(req, res)=>{
    let {id} = req.params
    let user = await Users.findOne({_id:id}).populate("blogs");
    if(userExist){
    res.json({
        success: true,
        data: userExist
    })
}
})
//delete blog
app.delete("/blogs/:blogId",async(req,res)=>{
    let {blogId} = req.params;
    let{userId} = req.body;
    let blogExist = await Blogs.findById(blogId);
    if(!blogExist)return res.json({
        success:false,
        message:"Blog does not exist"
    })
    if(blogExist.userId!=userId) return res.json({
        success:false,
        message:"you are not allowed to delete the Blog"
    }) 
    await Blogs.findByIdndDelete(blogId);
    let userExist = await user.findById(userId);
    let  blog=userExist.blogs.filter((id) =>id!= blogId)
    userExist.blogs=blog
    await userExist.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data:userExist
    })

})

app.listen(4445, () => {
    console.log("Server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));
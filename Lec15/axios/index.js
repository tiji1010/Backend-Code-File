console.log(axios)
function getComment(URL){
     axios.get(URL).then((data)=>{
        console.log(data)
     })
     .catch(err=>console.log(err))
}

getComment("https://jsonplaceholder.typicode.com/comments")
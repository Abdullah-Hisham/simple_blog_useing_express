const posts =require("../models/data")

const controller ={
    getAll : (req,res)=>{
        res.send("hello nice to met you ....")
    },
    getOne : (req,res)=>{
        const post=posts.find(post => post.id===parseInt(req.params.id))
        if (post){
            res.status(200).json({post:post})
        }else{
            res.status(404).json({message:"post not found"})
        }
    },
    delteOne: (req,res)=>{
        console.log(req.params.id)
        const post=posts.find(post => post.id===parseInt(req.params.id))
        if (post){
            const index =posts.insexOf(post)
            posts.splice(index,1)
            res.status(200).json({message:"true process"})
        }else{
            res.status(404).json({message:"post not found"})
        }
    },
    updateOne: (req,res)=>{
        const post=posts.find(post => post.id===parseInt(req.params.id))
        if (post){
            post.title =req.body.title ? req.body.title :post.title
            post.body =req.body.body   ? req.body.body :post.body
        }else{
            res.status(404).json({message:"post not found"})
        }
    },
    addOne: (res,req)=>{
        const post = {
            
            title:'hello nice to met you',
            body :'can you tell me where i am'
        }
    }
}
module.exports = controller

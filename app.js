//vars
const express = require('express')
const bodyParser =require("body-parser")
const app = express()
const PORT = 3000
const postsRouter = require('./routes/posts')
const controller = require('./controllers/post')
//endvars
app.get('/',(req,res)=>{
    res.send('<h1>can you tell me where i am </h1>')
})
app.use("/posts",postsRouter)

app.listen(PORT,()=>{
    console.log('run at 3000')
})
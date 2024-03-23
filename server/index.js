const express = require("express")
const OpenAI = require("openai")
const app = express()
app.use(express.json())

const openai = new OpenAI({
    apiKey:""
})

app.get('/getResponse',async(req,res)=>{

    const response = await openai.chat.completions.create({
        model:'gpt-4.0',
        messages: [{"role":"user","content":"essay on global warming"}],
        max_tokens:100,
        temperature : 0.7,
    })
    console.log(response)
})

app.listen(3000,()=>{
    console.log("server started")
})

import cors from 'cors'
import express from 'express'

import { convert } from './convert.js'
import { download } from './download.js' 
import { transcribe } from './transcribe.js'
import { summarize } from './summarize.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://nlw-ia-deploy.netlify.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/summary/:id', async (request, response) => {
    try{
    await download(request.params.id)
    const audioConverted = await convert()
    console.log(audioConverted)

    const result = await transcribe(audioConverted)

    return response.json({ result })
    }catch(error){
        console.log(error)
        return response.json({error})
    }
})

app.post("/summary", async (request, response) => {
    try{
   const result = await summarize(request.body.text)
   return response.json({result})
    }catch(error){
        console.log(error)
        return response.json({error})
    }
})

app.listen(3333, () => console.log('Server is running on port 3333'))

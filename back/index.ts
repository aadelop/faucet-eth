import express from 'express';
import {Request,Response} from 'express';
import { request } from 'http';

const app = express()
const port = 3333;
app.use(express.json())

app.get('/:p1/:p2', (req: Request, res:Response) => {
    const {p1,p2} = req.params;
    res.send(`This is a GET test route with params in the url :p1 = ${p1} and :p2 = ${p2}`)
})

app.post('/', (req: Request, res:Response) => {
    const body = req.body
    res.send(`{"message":"This is a POST test route", "body": ${JSON.stringify(body)} }`)
})

app.listen(port, ()=>{
    console.log("Server is runing on port ${port}");
})
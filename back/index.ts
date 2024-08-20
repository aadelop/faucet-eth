import express from 'express';
import {Request,Response} from 'express';
import { request } from 'http';
import cors from 'cors';
import {ethers} from 'ethers';

const app = express()
const port = 3333;
app.use(express.json())
app.use(cors())

app.get('/api/balanceEthers/:address', async (req: Request, res:Response) => {
    const {address} = req.params;
    const provider = new ethers.JsonRpcProvider('http://localhost:5556');
    const balance = await provider.getBalance(address);
    res.json({
        address,balance:Number(balance)/10**18, date: new Date().toISOString()
    })

})


app.get('/api/balance/:address', async (req: Request, res:Response) => {
    const {address} = req.params;
    const freturn = await fetch('http://localhost:5556',{
        method:'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBalance',
          params: [
            address,
            'latest'
          ],
          id: 1
        })
      })
      const data:any = await freturn.json();
      res.json({address,balance:Number(data.result)/10**18, date: new Date().toISOString()})

})

app.post('/', (req: Request, res:Response) => {
    const body = req.body
    res.send(body)
})

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
})
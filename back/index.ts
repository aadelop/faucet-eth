import express from 'express';
import {Request,Response} from 'express';
import { request } from 'http';
import cors from 'cors';
import {ethers} from 'ethers';
import fs from 'fs';

require('dotenv').config();
const app = express()
const port = 3333;
app.use(express.json())
app.use(cors())

app.get('/api/faucet/:address/:amount', async (req: Request, res:Response) => {
    const {address, amount} = req.params
    const provider = new ethers.JsonRpcProvider(process.env.URL_NODO)
    const ruta = process.env.KEYSTORE_FILE as string;
    const rutaData = fs.readFileSync(ruta, "utf8");
    const wallet = await ethers.Wallet.fromEncryptedJson(rutaData, process.env.KEYSTORE_PWD as string)
    const walletConnected = wallet.connect(provider)
    const tx = await walletConnected.sendTransaction({
        to:address,
        value: ethers.parseEther(amount)
    })
    await tx.wait()
    const balance = await provider.getBalance(address)
    console.log("balance", balance.toString());

    res.json({address, amount, balance: Number(balance)/10 ** 18, fecha: new Date().toISOString() })
})



app.get('/api/balanceEthers/:address', async (req: Request, res:Response) => {
    const {address} = req.params;
    const provider = new ethers.JsonRpcProvider(process.env.URL_NODO);
    const balance = await provider.getBalance(address);
    res.json({
        address,balance:Number(balance)/10**18, date: new Date().toISOString()
    })

})


app.get('/api/balance/:address', async (req: Request, res:Response) => {
    const {address} = req.params;
    const freturn = await fetch(process.env.URL_NODO as string,{
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
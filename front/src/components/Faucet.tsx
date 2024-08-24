import {useContext, useState} from "react";
import {UserContext} from "@/App";
import { Button } from "./ui/button";
import { Loader2 } from 'lucide-react';

export function Faucet(){
    const {state} = useContext(UserContext);
    const [tx, setTx] = useState<object | null>(null);
    const [loading, setLoading] = useState<boolean>(false)


    async function handleClick(){
        setLoading(true)
        const result = await fetch(`http://localhost:3333/api/faucet/${state.acc}/1`)
        const data = await result.json()
        setTx(data)
        setLoading(false)
    }
    return <div className="space-y-4 mt-5">
                <h1 className="text-xl font-bold">Faucet</h1>
                <p>Cuenta {state.acc}</p>
                <Button onClick={async () => handleClick()}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Request  CC 
                </Button>
                {tx && <p>Transaction:<pre>{JSON.stringify(tx, null, 4)}</pre></p>}
            </div>
    
}
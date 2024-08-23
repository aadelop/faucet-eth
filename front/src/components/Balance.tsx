import { UserContext } from "@/App";
import { useContext, useEffect, useState } from "react";

export function Balance(){
    const {state, setState} = useContext(UserContext);
    const [balance, setBalance] = useState<number>(0);
   
    useEffect(() => {
        const ethereum = window.ethereum;
        if (ethereum == null) {
            alert("Please install metamask");
            return;
        }
        ethereum.request({ method: "eth_getBalance", params:[state.acc]})
        .then((data:string) => {
            setBalance(Number(data)/10**18)
        })
    }, [state.acc])
   
    return  <div>
                <h1>Balance</h1>
                <p>The address <b>{state.acc}</b> have: <b>{balance} CC</b> </p>
            </div>
}
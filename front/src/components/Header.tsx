/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {useContext, useEffect} from "react";
import {UserContext} from "@/App";

export function Header(){
    const {state, setState} = useContext(UserContext);
    useEffect(() => {
      const ethereum = (window as any).ethereum;
      if(ethereum ==null){
          alert("Please install metamask");
      }
      ethereum.request({method: "eth_requestAccounts"}).then((acc: string[]) =>{
          setState({acc: acc[0]})
      });

      ethereum.on("accountsChanged", function (acc:string[]) {
          setState({acc: acc[0]})
      })
    }, [setState])

    return <div className="flex gap-2">
      <Link to='home'><Button>Home</Button></Link>
      <Link to='faucet'><Button>Faucet</Button></Link>
      <Link to='balance'><Button>Balance</Button></Link>
      <Link to='transfer'><Button>Transfer</Button></Link>
      <div className="flex gap-2 justify-center pt-4">
        {state.acc ? <p className="text-lg  font-bold text-center border-2">{state.acc}  </p> : <p> Cuenta no seleccionada</p>}
      </div>
    </div>
   }
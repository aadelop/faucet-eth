import { Link} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {useContext} from "react";
import {UserContext} from "@/App";

export function Header(){
    const {state, setState} = useContext(UserContext);
    return <div className="flex gap-2">
      <Link to='home'><Button>Home</Button></Link>
      <Link to='faucet'><Button>Faucet</Button></Link>
      <Link to='balance'><Button>Balance</Button></Link>
      <Link to='transfer'><Button>Transfer</Button></Link>
      <div className="flex gap-2 justify-center pt-4">
        {state.acc}:
      </div>
      <Button onClick={() => setState({acc:"new  account"})}>New account</Button>
    </div>
   }
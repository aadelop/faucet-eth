import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Dashboard} from './components/Dashboard.tsx';
import { Home } from './components/Home.tsx';
import { Faucet } from './components/Faucet.tsx';
import { Balance } from './components/Balance.tsx';
import { Transfer } from './components/Transfer.tsx';
import {createContext, useState} from 'react';

const router = createBrowserRouter([
  { path: '/',
    element: <Dashboard />,
    children:[
      {path:'home', element:<Home />},
      {path:'faucet', element:<Faucet />},
      {path:'balance', element:<Balance />},
      {path:'transfer', element:<Transfer />}
    ]

  }
])

export const UserContext = createContext({});


export default function App() {
  const [state, setState] = useState({
    acc:"",
  });
  return <UserContext.Provider value={{state, setState}}>
            <RouterProvider router={router}/>
         </UserContext.Provider>
    
  
 
}

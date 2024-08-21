import { Button } from "@/components/ui/button"
import {createBrowserRouter, Link, Outlet, RouterProvider} from 'react-router-dom'

 export function Home(){
    return <div>Home</div>
 }
 export function Faucet(){
  return <div>Faucet</div>
 }
 export function Balance(){
  return <div>Balance</div>
 }
 export function Transfer(){
  return <div>Transfer</div>
 }
 export function Header(){
  return <div className="flex gap-2">
    <Link to='home'><Button>Home</Button></Link>
    <Link to='faucet'><Button>Faucet</Button></Link>
    <Link to='balance'><Button>Balance</Button></Link>
    <Link to='transfer'><Button>Transfer</Button></Link>

  </div>
 }

 export function Dashboard(){
  return <div>
    <Header />
    <h1 className="text-xl">Dashboard</h1>
    <Outlet />
  </div>
 }


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

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
 
}

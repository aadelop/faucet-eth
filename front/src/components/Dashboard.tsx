import {Outlet} from 'react-router-dom'
import {Header} from '../components/Header.tsx';


export function Dashboard(){
    return <div>
      <Header />
      <h1 className="text-xl">Dashboard</h1>
      <Outlet />
    </div>
}
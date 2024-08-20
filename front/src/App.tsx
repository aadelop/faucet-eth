import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type Data = {
  jsonrpc: string
  id: number
  result: string
}

export default function Home() {

  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('http://localhost:5556',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [
          '0xc9958ed67E5196b8d99cC3C3a0B83f832c5EFB9a',
          'latest'
        ],
        id: 1
      })
    })
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
   
  }, [])

  if(!data) return <div>Loading...</div>

  return (
    <div>
      {Number(data.result)/10**18}
    </div>
  )
}

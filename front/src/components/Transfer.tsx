/* eslint-disable @typescript-eslint/no-explicit-any */
import {useForm} from 'react-hook-form';
import { Button } from './ui/button';
import {ethers} from 'ethers';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function Transfer(){
    const [loading, setLoading] = useState(false);
    const [tx, setTx] = useState<object | null>(null);
    const form = useForm({
        defaultValues:{
            from:"0x002457ee9c7d1118d254d3e21f555d85ee2df3b3",
            to:"0xc9958ed67E5196b8d99cC3C3a0B83f832c5EFB9a",
            amount: 0
        }
    });
    const onSubmit = async (data: any) =>{
        setLoading(true)
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner(data.from)
        const t = await signer.sendTransaction({
            to:data.to,
            value: ethers.parseEther(data.amount.toString())
        })
        const tx = await t.wait();
        setTx({tx,t,data})
        setLoading(false)
    }
    return <div className="space-y-4 mt-3">
                <h1 className="text-xl font-bold" >Transfer</h1>
                <p >Transfer your money here</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="from"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>From</FormLabel>
                            <FormControl>
                                <Input placeholder="0xc36df6758d.." {...field} />
                            </FormControl>
                            <FormDescription>
                                Address origin
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="to"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>From</FormLabel>
                            <FormControl>
                                <Input placeholder="0xc36df6758d.." {...field} />
                            </FormControl>
                            <FormDescription>
                                Address destination
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="0000" {...field} />
                            </FormControl>
                            <FormDescription>
                                Amount to transfer
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <Button type="submit">
                        <Loader2  size={16} className={loading ? "animate-spin" : "hidden"} />
                        Transfer</Button>
                    </form>
                </Form>
                {
                    tx &&(
                        <div>
                            <h2> Successfull transaction</h2>
                            <pre>{JSON.stringify(tx,null,4)}</pre>
                        </div>
                    )
                }
    </div>
}
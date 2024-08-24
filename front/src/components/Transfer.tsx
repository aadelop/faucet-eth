import {useForm} from 'react-hook-form';
import { Button } from './ui/button';
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

export function Transfer(){
    const form = useForm({
        defaultValues:{
            from:"0x2hf648hfgs",
            to:"0x0858yftd",
            amount: 0
        }
    });
    const onSubmit = (data:any) =>{
        console.log(data);
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
                    <Button type="submit">Transfer</Button>
                    </form>
               
                </Form>
    </div>
}
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/feature/user/userSilce";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types/taskTypes";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


function UserModal() {
  const [open , setOpen]= useState(false)
    const form = useForm()

    const dispatch = useAppDispatch()

    const onSubmit :SubmitHandler<FieldValues> =(data)=>{
      setOpen(false);
      
        dispatch(addUser(data as IUser ))
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add User</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only">Please form fill up</DialogDescription>
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
            </DialogHeader>
            <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value ||""}/>
                    </FormControl>
                  </FormItem>
                )}
              />
           
       
              <DialogFooter className="mt-4">
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
            </Form>
          </DialogContent>
        </Dialog>
      );
}

export default UserModal;
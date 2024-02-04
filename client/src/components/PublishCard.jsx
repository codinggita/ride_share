import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  from: z.string(),
  to: z.string(),
  seat: z.number().min(1).max(10),
  date: z.date().min(new Date()),
  time: z.string()
})


const PublishCard = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      seat: 1,
      date: new Date(),
      time: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create a Ride</CardTitle>
        <CardDescription>Publish your ride with just one click.</CardDescription>
      </CardHeader>
      <CardContent>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-center gap-4">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel>From</FormLabel>
                <FormControl>
                  <Input placeholder="From" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel>To</FormLabel>
                <FormControl>
                  <Input placeholder="To" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seat"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel>Available seats</FormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon" onClick={() => field.value>1 && field.onChange(field.value - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button variant="outline" size="icon" onClick={() => field.value<10 && field.onChange(field.value + 1)}  >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1.5">
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" required placeholder="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"ghost"} className={cn(" px-0 hover:bg-transparent justify-start", !field.value && "text-muted-foreground" )}>
                        <CalendarIcon size={20} className="opacity-50 mr-1" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() 
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Publish</Button>
        </form>
      </Form>
      </CardContent>
    </Card>
  )
}

export default PublishCard
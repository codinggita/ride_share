import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { z } from "zod"
import { format } from "date-fns"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { CalendarIcon, MapPin, Minus, Plus, User } from "lucide-react"
import { Input } from "./ui/input"


const searchSchema = z.object({
  from: z.string(),
  to: z.string(),
  seat: z.number().min(1).max(10),
  date: z.date().min(new Date()),
})

const Search = () => {
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      from: "",
      to: "",
      seat: 1,
      date: new Date()
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row w-fit mx-4 divide-y sm:divide-y-0 sm:divide-x bg-background border p-3 rounded-lg">
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem className="flex items-center space-y-0">
              <MapPin className="opacity-50" />
              <FormControl>
                <Input placeholder="From" className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none  px-1"  {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem className="flex items-center space-y-0">
              <MapPin className="opacity-50 sm:ml-2" />
              <FormControl>
                <Input placeholder="To" className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"ghost"} className={cn("md:text-base px-0 sm:px-4 hover:bg-transparent", !field.value && "text-muted-foreground" )}>
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
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="seat"
          render={({ field }) => (
            <FormItem className="flex">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant={"ghost"} className={cn("w-full justify-start md:text-base px-0 sm:px-4 hover:bg-transparent")} >
                      <User size={20} className="opacity-50 mr-1" />
                      <span className="text-md">{field.value}</span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-4 flex gap-2 items-center">
                    <Button variant="outline" size="icon" onClick={() => field.value>1 && field.onChange(field.value - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button variant="outline" size="icon" onClick={() => field.value<10 && field.onChange(field.value + 1)}  >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="md:ml-6" >Search</Button>
      </form>
    </Form>
    
  )
}

export default Search
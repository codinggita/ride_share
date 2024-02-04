import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { MoveDown, MoveRight, Star } from "lucide-react"
import { toast } from "sonner"

const RideDetail = () => {
  function handleBook(){
    console.log('click')
    toast("Your ride has been booked successfully", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    })
  }
  return (
    <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-8 md:flex-row jusitfy-center w-full">
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center w-full py-8 pb-4">
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-3xl font-semibold leading-7 lg:leading-9">India</h1>
              <p className="text-base font-medium leading-6 text-muted-foreground">21st March 2021 at 10:34 PM</p>
            </div>
            <MoveRight size={32} className="hidden sm:block"  />
            <MoveDown size={32} className="block sm:hidden" />
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-3xl font-semibold leading-7 lg:leading-9">Dubai</h1>
              <p className="text-base font-medium leading-6 text-muted-foreground">21st March 2021 at 10:34 PM</p>
            </div>
          </div>
          <div className="w-full py-3 border-t">
            <span className="text-base">BMW X5 (Black)</span>
          </div>
          <div className="w-full py-3 border-t">
            <span className="text-base">Total Price for 1 Passenger: ₹200</span>
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button>Book Ride</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure to confirm your ride?
                  This action will finalize your participation in the shared journey. 
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleBook} >Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>


        <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl font-semibold leading-5">Rider Details</h3>
          <div className="flex flex-col justify-start items-stretch h-full w-full">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex w-full space-x-4 py-8 border-b">
                {/* <img src="https://github.com/shadcn.png" alt="avatar" /> */}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-left">John</p>
                  <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> 4.5 - 10 ratings</div>
                </div>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left">About John</p>
                  <p className="text-sm text-muted-foreground">19 y/o</p>
                  <p className="text-sm text-muted-foreground">20 Rides published</p>
                  <p className="text-sm text-muted-foreground">Member since 2020</p>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left">Preferences</p>
                  <p className="text-sm text-muted-foreground">No smoking, please</p>
                  <p className="text-sm text-muted-foreground">I&apos;d prefer not to travel with pets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default RideDetail
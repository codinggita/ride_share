import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Toaster } from "@/components/ui/sonner"
import useFetch from "@/hooks/useFetch"
import { MoveDown, MoveRight, Star } from "lucide-react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import { format, formatDistance } from "date-fns";
import axios from "axios"

const apiUri = import.meta.env.VITE_REACT_API_URI

const RideDetail = () => {
  const { rideId } = useParams();
  const { loading, data, error } = useFetch(`rides/${rideId}`);

  const handleBook = async() => {
    try{
      const res = await axios.get(`${apiUri}/rides/${rideId}/join`, {withCredentials: true})
      toast(res, {
        description: format(new Date(), "PPp"),
      });
    }catch(err){
      console.log(err)
    }
  };

  if (loading) {
    return <Skeleton className="w-full" />;
  }

  if (error) {
    return <h3 className="text-xl p-10 text-center h-svh">Error: {error.message || "ride not found"}</h3>;
  }

  return (
    <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col gap-8 md:flex-row jusitfy-center w-full">
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center w-full py-8 pb-4">
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.origin.place}</h1>
              <p className="text-base font-medium leading-6 text-muted-foreground">{data && format(new Date(data?.startTime), "PPp")}</p>
            </div>
            <MoveRight size={32} className="hidden sm:block" />
            <MoveDown size={32} className="block sm:hidden" />
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.destination.place}</h1>
              <p className="text-base font-medium leading-6 text-muted-foreground">{data && format(new Date(data?.endTime), "PPp")}</p>
            </div>
          </div>

          <div className="w-full py-3 border-t">
            <p className="text-base">BMW X5 (Black)</p>
          </div>
          <div className="w-full py-3 border-t">
            <p>Duration: {data && formatDistance(new Date(data.startTime), new Date(data.endTime))}</p>
          </div>
          <div className="w-full py-3 border-t">
            <p className="text-base">Seats: {data?.availableSeats}</p>
          </div>
          <div className="w-full py-3 border-t">
            <p className="text-base">Total Price for 1 Passenger: ₹{data?.price}</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Book Ride</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleBook}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl font-semibold leading-5">Rider Details</h3>
          <div className="flex flex-col justify-start items-stretch h-full w-full">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex w-full space-x-4 py-8 border-b">
                <Avatar>
                  <AvatarImage src={data?.profilePicture}/>
                  <AvatarFallback className="select-none text-primary text-xl font-bold">{data?.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-left">{data?.creator.name}</p>
                  <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.creator.stars} ratings</div>
                </div>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                <p className="text-base font-semibold leading-4 text-center md:text-left">About John</p>
                <p className="text-sm text-muted-foreground">{data?.creator.age} y/o</p>
                <p className="text-sm text-muted-foreground">{data?.creator.ridesCreated?.length} Rides published</p>
                <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0, 4)}</p>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                <p className="text-base font-semibold leading-4 text-center md:text-left">Preferences</p>
                <p className="text-sm text-muted-foreground">{data?.creator.profile.preferences.smoking}</p>
                <p className="text-sm text-muted-foreground">{data?.creator.profile.preferences.music}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default RideDetail
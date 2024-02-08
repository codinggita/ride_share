import RideCard from "@/components/RideCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Toaster } from "@/components/ui/sonner"
import { Textarea } from "@/components/ui/textarea"
import useFetch from "@/hooks/useFetch"
import axios from "axios"
import { Pencil, Star, Trash } from "lucide-react"
import { Fragment, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

const Profile = () => {

  const [rideDeleteMode, setRideDeleteMode] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      bio: "",
      smokingPreference: {},
    },
  })

  const onSubmit = async (newData) => {
    try {
      await axios.patch('https://rideshare-03wo.onrender.com/api/users/65c30725592bf64de69981c1', {
        name: newData.name,
        profile: {...data.profile,
          bio: newData.bio,
        }
      });
      refetch();
      setEditMode(false)
    } catch (error) {
      console.error('Patch error:', error);
    }
  }

  const {loading, data, refetch} = useFetch(`users/65c30725592bf64de69981c1`)

  async function handleDelete(id){
    console.log(id)
    try {
      await axios.delete(`https://rideshare-03wo.onrender.com/api/rides/${id}`);
      refetch();
      toast("The ride has been Deleted")
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  return (
    <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col sm:flex-row h-full w-full">
        <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
          <div className="flex w-full space-x-4 py-8">
            {loading?
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              :
              <>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
              <div className="flex justify-center items-start flex-col space-y-2">
                <p className="text-base font-semibold leading-4 text-left">{data?.name}</p>
                <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.stars} - {data?.ratings.length} ratings</div>
              </div>
              </>
            }
          </div>
          {
            !editMode ?
            <>
              <Button variant='outline' onClick={() => setEditMode(true)} >Edit Profile</Button>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                <h3 className="text-base font-semibold leading-4 text-center md:text-left">About</h3>
                <p className="text-sm text-muted-foreground">{data?.profile.bio}</p>
                <p className="text-sm text-muted-foreground">{data?.age && `${data?.age} y/o`}</p>
                <p className="text-sm text-muted-foreground">{data?.ridesCreated.length} Rides published</p>
                <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0,4)}</p>
              </div>
              <div className="flex justify-center items-start flex-col space-y-4 mt-8">
                <h3 className="text-base font-semibold leading-4 text-center md:text-left">Preferences</h3>
                <p className="text-sm text-muted-foreground">{data?.profile.preferences?.music}</p>
                <p className="text-sm text-muted-foreground">{data?.profile.preferences?.smoking}</p>
                <p className="text-sm text-muted-foreground">{data?.profile.preferences?.petFriendly}</p>
              </div>
            </>
            :
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              <Label htmlFor="name">Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input placeholder="name" id="name" {...field} />}
              />
              <Label htmlFor="bio">Bio</Label>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => <Textarea placeholder="bio" id="bio" {...field} />}
              />

              <Button type="submit">Save</Button>
              <Button variant='outline' onClick={(e) => {e.preventDefault(); setEditMode(false)}}>Cancel</Button>
            </form>
          }
        </div>
      
        <div className="flex flex-col justify-start items-start gap-2 w-full sm:w-2/3">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-semibold">Your Rides</h1>
            <Pencil className={`cursor-pointer p-1 rounded-lg ${rideDeleteMode && 'bg-primary text-primary-foreground'} `} size={25} onClick={() => setRideDeleteMode(!rideDeleteMode)} />
          </div>
          {data?.ridesCreated.map(ride => 
            <Fragment key={ride._id} >
            <RideCard details={ride} />
            { rideDeleteMode && <Trash className="text-destructive cursor-pointer" onClick={()=> handleDelete(ride._id)} />}
            </Fragment>
          )}
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default Profile
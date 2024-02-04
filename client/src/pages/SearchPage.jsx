import RideCard from '@/components/RideCard'
import Search from '@/components/Search'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { MoveRight, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const SearchPage = () => {

  const rides = [
    {
      _id: "adfasdf",
      creator: "John",
      availableSeats: 2,
      origin: {
        place: "Delhi",
        coordinates: [12,313]
      },
      destination: {
        place: "Chandigarh",
        coordinates: [122,13]
      },
      startTime: "2024-01-17T23:43",
      endTime: "2024-01-17T16:30",
      status: 'pending',
      price: 500,
      vehicleDetails: {
        vehicleNumber: "3434",
        model: "XUV"
      },
    },
    {
      _id: "adfasd",
      creator: "John",
      availableSeats: 2,
      origin: {
        place: "Delhi",
        coordinates: [12,313]
      },
      destination: {
        place: "Chennai",
        coordinates: [122,13]
      },
      startTime: "2024-01-17T23:43",
      endTime: "2024-01-17T23:43",
      status: 'pending',
      price: 500,
      vehicleDetails: {
        vehicleNumber: "3434",
        model: "XUV"
      },
    },
    {
      _id: "adfas",
      creator: "Shyam",
      availableSeats: 2,
      origin: {
        place: "Amritsar, Punjab",
        coordinates: [12,313]
      },
      destination: {
        place: "Ludhiana, Punjab",
        coordinates: [122,13]
      },
      startTime: "2024-01-17T23:43",
      endTime: "2024-01-17T23:43",
      status: 'pending',
      price: 500,
      vehicleDetails: {
        vehicleNumber: "3434",
        model: "XUV"
      },
    },
  ]

  return (
    <main>
      <div className="z-10 flex justify-center items-center border-b bg-background p-8">
        <Search />
        <Dialog>
          <DialogTrigger>
            <Button variant='outline' className="md:hidden absolute right-0">
              <SlidersHorizontal />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <Sidebar />
          </DialogContent>
        </Dialog>
      </div>
      <div className="container p-0 max-w-screen-xl grid lg:grid-cols-5">
        <div className="hidden sm:block">
          <div className="sticky top-16">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-3 py-6 lg:col-span-4 lg:border-l">
          <div className="container">
            <h3> Delhi <MoveRight className='inline-block' /> Chandigarh</h3>
            <h3>15 rides available</h3>

            {rides.map(ride => 
              <Link key={ride._id} to={`/ride/${ride._id}`}>
                <RideCard details={ride} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage
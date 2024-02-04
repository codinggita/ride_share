import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import error  from "../assets/error.svg"

const Error = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row p-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
          <img src={error} alt="error" />
      </div>
      <div className="w-full lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold">Looks like you&apos;ve found the doorway to the great nothing</h1>
          <p className="py-4 text-muted-foreground text-base">The content you&apos;re looking for doesn&apos;t exist. Either it was removed, or you mistyped the link.</p>
          <p className="py-2 text-muted-foreground text-base mb-4">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <Link to="/">
            <Button>Go back to Homepage</Button>
          </Link>
      </div>
  </div>
  )
}

export default Error
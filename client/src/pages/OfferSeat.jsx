import PublishCard from "@/components/PublishCard"

const OfferSeat = () => {
  const steps = [
    {
      step: 1,
      title: "Create your account",
      description: "Add your profile picture, a few words about you and your phone number to increase trust between members."
    },
    {
      step: 2,
      title: "Publish a ride",
      description: "Indicate departure and arrival points, the date of the ride and check our recommended price to increase your chances of getting your first passengers and ratings."
    },
    {
      step: 3,
      title: "Enjoy the ride",
      description: "That's how easy it is to start saving on travel costs!"
    },
  ]
  return (
    <section>
      <h1 className="text-3xl text-center p-5 font-bold"> <span className="text-primary"> Publish </span> a <span className="text-primary"> Ride </span> in Just <span className="text-primary">Minutes</span></h1>
      <div className="container pt-6 max-w-screen-xl pb-16 mx-auto md:justify-center flex flex-col md:flex-row items-center lg:items-start ">
        <div className="md:w-fit w-fit justify-center mb-10 lg:mb-0">
          <PublishCard />
        </div>
        <div className="flex flex-col flex-wrap gap-10 px-0 md:px-10 sm:py-0 md:w-2/3 text-left">
        {steps.map(step => 
          <div key={step.step} className="flex flex-col md:items-start">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-secondary text-primary mb-5">{step.step}</div>
            <div className="flex-grow">
              <h2 className="text-lg title-font font-medium mb-3">{step.title}</h2>
              <p className="leading-relaxed text-muted-foreground text-base">{step.description}</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default OfferSeat
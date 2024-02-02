import { HandCoins, ShieldCheck, Rocket } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <HandCoins />,
      title: "Save on travel costs",
      desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling."
    },
    {
      icon: <ShieldCheck />,
      title: "Join a trustworthy community",
      desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling."
    },
    {
      icon: <Rocket />,
      title: "Carpooling made simple",
      desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps."
    }
  ]
  return (
    <section className="text-foreground container max-w-screen-xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="md:px-5 py-16 sm:py-0 mx-auto">
        <div className="flex flex-wrap">
          {features.map(f => 
            <div className="md:w-1/3 flex rounded-lg h-full p-6 flex-col" key={f.title}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary flex-shrink-0">
                  {f.icon}
                </div>
                <h2 className="text-lg">{f.title}</h2>
              </div>
              <div className="flex-grow text-muted-foreground">
                <p className="leading-relaxed text-base">{f.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Features
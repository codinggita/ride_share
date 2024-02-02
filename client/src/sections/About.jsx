import about from "../assets/about.jpg"
const About = () => {
  return (
    <section className="mx-auto container max-w-screen-xl py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img alt="Party" src={about} className="absolute inset-0 h-full w-full object-cover"/>
        </div>
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Make your everyday life <span className="text-primary" >smart</span> & <span className="text-primary" >sustainable</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Effortlessly find and connect with fellow commuters who have similar routes or destinations. Whether it&apos;s commuting to work, attending events, or running errands.</p>
          <p className="mt-4 text-muted-foreground">This platform brings together a community of travelers with a common goal: to share rides and reduce traffic congestion while enjoying the benefirts of cost saving and social interaction.</p>
        </div>
      </div>
    </section>
  )
}

export default About
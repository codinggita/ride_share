import bg from "@/assets/hero.svg"
import Search from "@/components/Search"

const Hero = () => {
  return (
    <div className="relative h-72 md:h-96 flex justify-center items-center bg-[#ebf3fa]">
      <div className="h-full">
        <img src={bg} className="h-full" alt="hero" />
      </div>
      <h1 className="text-2xl text-center sm:text-4xl md:text-5xl absolute text-primary font-extrabold">Your pick of rides at low price</h1>
      <div className="absolute z-10 -bottom-24 w-full px-10 sm:w-fit sm:-bottom-8">
        <Search />
      </div>
    </div>
  )
}

export default Hero
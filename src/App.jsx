import { Cards } from "./components/Cards"

export default function App() {

  return (
    <>
      <header className="h-60 md:h-40 lg:h-50 w-full mt-5 md:mt-0 bg-white md:bg-[#111827] text-black md:text-white md:px-16 md:pr-20 lg:px-40 lg:pr-50 xl:px-85 tracking-tighter flex flex-col md:flex-row justify-evenly md:justify-between items-center">
        <h1 className="w-[85%] md:w-[50%] lg:w-[50%] md:h-[56%] text-3xl font-serif font-bold">The creative crew</h1>
        <div className="w-[65%] md:w-[42%] lg:w-[40%] xl:w-[40%] font-sans">
          <h3 className="font-semibold text-lg">Who we are</h3>
          <p>We are team of creatively diverse
          driven. Innovative individuals working in
          various locations from the world.</p>
        </div>
      </header>

      <section className=" md:bg-[#111827] w-full h-210 md:h-180 flex justify-center">
            <Cards/>
      </section>
        
    </>
  )
}



export function Cards() {
  const cards = [
    {photo:"../public/img/photo1.png",
     desc:"PRODUCT OWNER",
     name:"Bill Mahoney"
    },
    {photo:"../public/img/photo2.png",
        desc:"ART DIRECTORS",
        name:"Saba Cabrera"
    },
    {photo:"../public/img/photo3.png",
        desc:"TECH LEAD",
        name:"Shae Le"
    },
    {photo:"../public/img/photo4.png",
        desc:"UX DESIGNER",
        name:"Skylah Lu"
    },
    {photo:"../public/img/photo5.png",
        desc:"DEVELOPER",
        name:"Griff Richards"
    },
    {photo:"../public/img/photo6.png",
        desc:"PRODUCT OWNER",
        name:"Stan John"
    }
]  

    const allCards = cards.map(({photo, desc, name})=>{
        return(
            <div className=" w-38 md:w-60 h-57 md:h-70 even:mt-8 md:even:mt-0 md:nth-[3n+2]:mt-15">
                <div className="w-full h-52 md:h-64 flex relative md:text-white">
                <img className="w-34 md:w-53 h-full" src={photo} alt={name} />
                <p className="w-30 h-10 text-[10px] font-serif tracking-tight rotate-90 absolute left-17 md:left-37 top-10">{desc}</p>
                </div>
                <p className="w-full h-5 font-bold  tracking-tight text-black md:text-white">{name}</p>
             </div>
        )
    })


  return (
    <div className=" w-[85%] md:w-[90%] lg:w-[80%] xl:w-[55%] h-[95%] grid grid-cols-2 md:grid-cols-3 gap-6">
            {allCards}
    </div>
  )
}

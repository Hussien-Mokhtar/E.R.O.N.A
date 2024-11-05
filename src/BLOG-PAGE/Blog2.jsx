import story4 from "../assets/story4.webp"
import story5 from "../assets/story5.webp"
import story6 from "../assets/story6.webp"
import Blog2Dynamic from "../DYNAMIC/Blog2Dynamic"

export default function Blog2() {
          const blog2 = [
        { id:4 , img:story4 , title1:"12 JUN, 2024", title2:"Where does it come from?",title3:"As part of our mession create space for women to express their sensulity with out shame..."  },
        { id:5 , img:story5 , title1:"12 JUN, 2024", title2:"Why do we use it??",title3:"As part of our mession create space for women to express their sensulity with out shame..."  },
        { id:6 , img:story6 , title1:"12 JUN, 2024", title2:"Where can i get some?",title3:"As part of our mession create space for women to express their sensulity with out shame..."  },
      ]


  return (
     <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 ">
{blog2.map((b2)=>{
 return <Blog2Dynamic key={b2.id} blog2={b2}/>
})}
    </div> 
)
}

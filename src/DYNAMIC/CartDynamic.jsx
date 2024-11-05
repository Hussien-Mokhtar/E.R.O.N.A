import { useContext, useState } from "react"
import { CartContext } from "../USE-CONTEXT/CartContext"
export default function CartDynamic({cart1}) {
    const [count, setCount ] = useState(1)

    const Plus= () =>{
       {count < 14 && setCount(count + 1)}
    } 
    const minus = () =>{
        {count > 0 &&  setCount(count-1)}
    } 
    const reset = (e) =>{
    e.target.parentElement.parentElement.remove()
    }

    //  const contextValue = useContext(CartContext)
    //  const [cart,setCart] = useContext(CartContext)
     
    //  const totalPrice= cart.reduce((acc, curr)=> acc + curr.price1 , 0);
     
     const addToCart = ()=> {
       const tshirt = {price: cart1.price}
     setCart (curr => [...curr, tshirt]);
     }
     
  return (
    <>
            <div className="container mx-auto px-10 ">
        <div className="grid lg:grid-cols-5  ">
        <div className="flex justify-center items-center gap-4">
            <img src={cart1.img} alt="" className="rounded-full w-[25%] "/><span className="lg:text-[0.7rem] ">{cart1.title}</span></div>

        <div className="flex justify-center items-center "><p className='pp'>{cart1.price}</p></div>

        <button className="flex justify-center py-4 border border-gray-200 gap-8
         hover:border-orange-500 lg:w-[60%]"
          onClick={addToCart}
          >
            <h1 onClick={minus}>
                <span className="lg:text-3xl text-4xl">-</span> </h1>

                <h4 className="lg:text-2xl text-xl">{count } </h4>
                
                <h1 onClick ={Plus} className="text-2xl">
                    <span className="" >+ </span> 
                    </h1>
                </button> 

        <div className="flex justify-center items-center "><p >{cart1.total}</p></div>

        <div className="flex justify-center items-center "><button  onClick={reset} className="bg-black text-white rounded-full py-[8px] px-[18px] lg:mt-0 mt-5 text-2xl  ">x</button></div>
        </div>
      

        </div>
       

      
    </>
  )
}

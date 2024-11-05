import nine from "../assets/nine.webp"
import eight from "../assets/eight.webp"
import fife from "../assets/fife.webp"
import CartDynamic from "../DYNAMIC/CartDynamic"
import { CartProvider } from "../USE-CONTEXT/CartContext"
export default function Cart() {
    const cart = [
        {id : 1, img: nine, title:"MEN SHIRT COMEFORTABLE COTTON WEAR - (COLOR): BLACK" , price: 40 , total:40 , quantity:1 },
        {id : 2, img: eight, title:"JERSY TOP FOR GIRLS - (COLOR): WHITE BLUE" , price: 40 , total:40, quantity: 1 },
        {id : 3, img: fife, title:"CLASSIC TOP  - (COLOR): WHITE GREEN" , price: 40 , total:40, quantity: 1 },
      ]

  return (
    <>
      <CartProvider>

      <div className=" flex flex-col py-8 gap-6">
      {cart.map((c1)=>{
          return <CartDynamic key={c1} cart1={c1}/>
         })}

      </div>
      </CartProvider>
    </>
  )
}

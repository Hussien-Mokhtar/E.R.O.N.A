import { useSelector,useDispatch } from "react-redux";

export default function Redux1() {
    const dispatch = useDispatch()

    const globalState = useSelector((state)=>{
return state
    })

    const handlerCounterValue = (value)=>{
    if(value< 1){
        return "no number"
    }
    return value;
    }

    const increase= ()=>{
        dispatch({type:"increase" , payload: 1})
    }
    const decrease= ()=>{
        dispatch({type:"decrease" , payload: 1})
    }

    const toggleCounter = ()=>{
        dispatch({type: "toggleCounter"})
    }
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-2">
        <h1>Hello Redux Basic</h1>
        {globalState.showCounter && (
           <>
                   <h5>Counter: {handlerCounterValue (globalState.value)}</h5>
        <div className="flex flex-row gap-2">
        <button className='border-2 ' onClick={increase}>increase +</button>
        <button className='border-2 ' onClick={decrease}>decrease -</button>
        </div>
           </>
        )}
                <button className='border-2' onClick={toggleCounter}>Hide / Show Counter Number</button>

    </div>
    </>
  )
}

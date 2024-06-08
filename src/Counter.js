import { useState } from "react"
import Button from "./Button"
export default function Counter({count,onIncrement,onDecrement}){

    return(
        <>
        <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">
                    <h1 className="text-2xl text-black">Value {count}</h1>
                    <Button handler={onIncrement} >Increment</Button>
                    <Button handler={onDecrement} type={'danger'}>Decrement</Button>
            </div>

        </div>
        </>
    )
}
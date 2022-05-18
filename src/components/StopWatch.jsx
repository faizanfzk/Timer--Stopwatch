import React , {useEffect, useState} from "react"

export const Stop=()=>{
    const [milli,setMilli]=useState(0)
    const [sec,setSec]=useState(0)
    const [min,setMin]=useState(0)


var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setMilli(milli+1)
            if(milli===59){
                setSec(sec+1)
                setMilli(0)
            }
            if(sec===59){
                setMin(min+1)
                setSec(0)
            }

        },14)
        return()=>clearInterval(timer)

    })
    const start=()=>{
        setMilli(milli+1)
    }
    const stop=()=>{
        clearInterval(timer)
    }
    const reset=()=>{
        setMilli(0)
        setSec(0)
        setMin(0)
    }

    return(
        <div>
            <h1> {min<10 ? "0"+min:min}:{sec<10 ? "0"+sec:sec}:{milli<10 ? "0"+milli: milli}</h1>
            <div className="btn">
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
            <button onClick={reset}>RESET</button>
            </div>
        </div>
    )
}
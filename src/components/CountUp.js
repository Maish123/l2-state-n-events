import React, { useState } from "react";

function CountUp(){

    const[count, setCount] = useState(0)

    function addCount(){
        setInterval(
            () => {setCount(count + 1)}, 1000
        )  
    }
    addCount();
    // FIND A WAY TO STOP COUNT AT 100
    // FIND OUT WY COUNTER GOE BEZERK

    return (
            <div>
                <center>
                    <h4 className="time-text">{count}</h4>
                </center>
            </div>
    )
}


export default CountUp
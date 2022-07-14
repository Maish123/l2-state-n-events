import React, { useState } from "react";

function CountMiddle(){

    const[count, setCount] = useState(0)

    function addFifty(){
        setCount(50)
    }
    // TODO: INCREMENT VALUE BY USING EVENT HANDLER

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={addFifty}>CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle
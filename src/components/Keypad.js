// Code Keypad Component Here
import React from 'react';

function Keypad ()
{
    return (
        <div>
            <h1>Keypad</h1>
            <form onSubmit={e=>e.preventDefault(e)}>
                <input type="password" onChange={()=>console.log("Entering password...")}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Keypad;
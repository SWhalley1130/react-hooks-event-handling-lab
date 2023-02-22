// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe()
{
    return (
        <div>
           <h1>Eyes on Me</h1>
           <button onFocus={()=>console.log('Good!')} onBlur={()=>console.log("Hey! Eyes on me!")}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;
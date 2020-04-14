import React from 'react';


const Greet= (props) =>{
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name} you are a real {props.heroName}</h1>
            {props.children}  
        </div>
    )
}

export  default Greet;

//props is name by convention had ook anders mogen heten
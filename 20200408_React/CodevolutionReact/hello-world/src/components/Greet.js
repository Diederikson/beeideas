import React from 'react';


const Greet= ({name,heroName,children}) =>{
    console.log({name,heroName});
    return(
        <div>
            <h1>Hello {name} you are a real {heroName}</h1>
            {children}  
        </div>
    )
}

export  default Greet;

//props is name by convention had ook anders mogen heten
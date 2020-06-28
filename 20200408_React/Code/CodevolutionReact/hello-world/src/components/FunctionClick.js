import React from 'react'

function FunctionClick() {
    
    function clickHandler(){
        console.log('Button klikt. Wil je dat niet meer doen ja')
    }
    return (
        <div>
            <button onClick={clickHandler}>Clickk!</button>
        </div>
    )
}

export default FunctionClick

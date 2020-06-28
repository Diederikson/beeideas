import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
    //     this.setState({
    //         count: this.state.count+1
    //     },
    //     ()=>{
    //         console.log('Cal',this.state.count)
    //     })
    // }
    this.setState((prevState)=>({
        count: prevState.count+1
    }))
}
    render() {
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Incement Me!</button>
            </div>
            )    
        }
    }

export default Counter

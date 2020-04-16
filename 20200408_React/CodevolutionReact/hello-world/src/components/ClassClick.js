import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked de button. Wil je daar eens mee ophouden')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>KlikDan!</button>
            </div>
        )
    }
}

export default ClassClick

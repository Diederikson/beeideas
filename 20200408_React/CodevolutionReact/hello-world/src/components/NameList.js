import React from 'react'
import Person from './Person' 

function NameList() {
    const persons =[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'Wreact'
        },
        {
            id:2,
            name:'Clark',
            age:25, 
            skill:'Engular'
        },
        {
            id:3,
            name:'Dave',
            age:72,
            skill:'COBOL'
        }
    ]
    const personList = persons.map(person => <Person key={id} person={person}/>)
    return (
        <div>
            {personList}
        </div> 
    )
}

export default NameList

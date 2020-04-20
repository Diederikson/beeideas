import React from 'react'

function Person({person,key}) {
    return (
        <div>
            <h2>{person.id} Is my id bro.</h2>
            <h2>{person.name} Is my name bro.</h2>
            <h2>{person.age} Is my age bro.</h2>
            <h2>{person.skill} Is my skill bro.</h2>

        </div>
    )
}

export default Person

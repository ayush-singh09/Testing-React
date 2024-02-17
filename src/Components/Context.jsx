import React, { createContext, useState } from 'react'

export const myContext = createContext();

function Context(props) {
    const [data, setData] = useState([
        {
            id:1,
            name:"John Green"
        },
        {
            id:2,
            name:"Veeran Patel"
        },
        {
            id:3,
            name:"Himmat Singh"
        },
        {
            id:4,
            name:"Abbaas"
        },
        {
            id:5,
            name:"Farooq Ali"
        },
    ])
  return (
    <myContext.Provider value={{data}}>{props.children}</myContext.Provider>
  )
}

export default Context
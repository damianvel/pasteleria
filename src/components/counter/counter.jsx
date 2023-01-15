import React from 'react'
import { useState, useEffect } from "react"
import AddButton from "../buttons/addButton"
import ChangeButton from "../buttons/changeButton"

const Counter = ({ stock, initial=1, onAdd }) => {

  useEffect(()=>{setCounter(initial)}, [initial])

  const [counter, setCounter] = useState(initial)

  return (
    <>
      <h2>cantidad:{counter}</h2>

<ChangeButton stock={stock} counter={counter} setCounter={setCounter}></ChangeButton>
<AddButton onAdd={onAdd} counter={counter} ></AddButton>

 

    </>
  )
}

export default Counter

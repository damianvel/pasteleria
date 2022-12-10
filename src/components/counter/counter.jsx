import ChangeButton from "../buttons/changeButton"
import AddButton from "../buttons/addButton"
import { useState } from "react"

const Counter = ({ stock, initial}) => {

  const [counter, setCounter] = useState(initial)

  return (
    <>
      <h2>{counter}</h2>
      < ChangeButton counter={counter} setCounter={setCounter} stock={stock}  />
      < AddButton stock={stock} counter={counter}/>
    </>
  )
}

export default Counter

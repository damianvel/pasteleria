import React from 'react'
import './addButton.css'
import { useState } from 'react'

const AddButton = ({bottonTitle})=>{

const [counter, setCounter] = useState(0)

const sumar = ()=>{
setCounter(counter + 1)
} 


return(
<><button onClick={sumar}  type="button" class="btn btn-danger">{bottonTitle}</button>
<h2 class="contador">{counter}</h2>
</>


)

}

export default AddButton

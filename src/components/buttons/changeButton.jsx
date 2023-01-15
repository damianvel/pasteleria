import React from 'react'
import './changeButton.css'

const ChangeButton = ({ counter, setCounter, stock }) => {


    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter>1){
        setCounter(counter - 1)}
    }

    return (
        <>

            <button onClick={counter > 0 ? restar : null} type="button" class="btn btn-danger">Restar</button>
            <button onClick={counter < stock ? sumar : null} type="button" class="btn btn-danger">Sumar</button>


        </>
    )
}

export default ChangeButton


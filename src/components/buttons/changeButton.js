import React from 'react'
import './changeButton.css'

const ChangeButton = ({ counter, setCounter, stock }) => {


    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <>


            <button onClick={counter < stock ? sumar : null} type="button" class="btn btn-danger">Sumar</button>
            <button onClick={counter > 0 ? restar : null} type="button" class="btn btn-danger">Restar</button>


        </>
    )
}

export default ChangeButton

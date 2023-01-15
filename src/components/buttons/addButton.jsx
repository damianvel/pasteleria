import React from 'react'

const AddButton = ({onAdd, counter}) => {


    

    return (
        <>
            <button onClick={()=>{onAdd(counter)}} type="button" class="btn btn-warning">agregar</button>
        </>
    )
}

export default AddButton
 
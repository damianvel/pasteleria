import React from 'react'

const AddButton = ({stock , counter}) => {

    const onAdd = () => { 

        
    }

    return (
        <>
            <button onClick={counter < stock ? onAdd : null} type="button" class="btn btn-warning">agregar</button>
        </>
    )
}

export default AddButton

import React from 'react'

const BuyBottom = ({letsBuy}) => {
  return (
    <>
    <button onClick={()=>{letsBuy()}} type="button" class="btn btn-warning">comprar</button>
</>
  )
}

export default BuyBottom
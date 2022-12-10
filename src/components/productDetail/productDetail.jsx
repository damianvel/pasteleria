import React from 'react'

const productDetail = ({product}) => {
  return (
    <>

<h2>{product.name}</h2>
    <h3>{product.description}</h3>
    </>
  )
}

export default productDetail


import Counter from "../counter/Counter"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const ProductDetail = ({ product }) => {

   // eslint-disable-next-line
const { addToCart, getQuantityById  } = useContext(CartContext)

const quantity = getQuantityById(product.id)


console.log(quantity)

  const onAdd = (quantity) => {


    addToCart(
      {
        ...product,
        quantity: quantity
      }

    )
  }

  return (
    <>

      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
     
    <Counter onAdd={onAdd} stock={product.stock} initial={quantity} />
    
    </>
  )
}



export default ProductDetail  

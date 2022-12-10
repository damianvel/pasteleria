import ProductDetail from "../productDetail/productDetail"
import { useState, useEffect } from "react"
import { products } from "../../productsMock"
import { useParams } from "react-router-dom" 

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})

const {id} = useParams()


useEffect (

()=>{

const selected = products.find(x => x.id === +id)
setProduct(selected)
}
, []
)

  return (
<>
< ProductDetail product={product} />

</>  )
}
export default ItemDetailContainer
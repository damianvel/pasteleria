
import "./itemListContainer.css"
import { products } from "../../productsMock"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../productCard/ProductCard"

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {categoryName} = useParams()

  useEffect(() => {

const filtrados = products.filter(   x=> x.category === categoryName  )

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? filtrados : products)
      }, 1000);

    })
    task.then((res) => { setItems(res) })
  }, [categoryName])

  return (
    <>

      {items.map((element) => {
        return (
          <>
          <ProductCard key={element.id} element={element}  />
          </>
        )

      })
      }
    </>

  )
}

export default ItemListContainer
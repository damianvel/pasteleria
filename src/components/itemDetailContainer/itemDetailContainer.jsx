import ProductDetail from "../productDetail/ProductDetail"
import { useState, useEffect } from "react"
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()


  useEffect(

    () => {

      const itemCollection = collection(db, "products")
      getDoc(doc(itemCollection, id))
        .then((res) => {

          setProduct({
            ...res.data(), id: res.id
          }              
          )
        
        })
        .catch(err => console.log(err))


    }
    , [id]
  )

  return (
    <>


      < ProductDetail product={product} />

    </>)
}

export default ItemDetailContainer

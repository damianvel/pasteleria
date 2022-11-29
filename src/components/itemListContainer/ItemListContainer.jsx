
import "./itemListContainer.css"
import AddButton from "../buttons/addButton"






const ItemListContainer = ({ greeting }) => {


  return (
    <>
      <h2 class="saludo">{greeting = "Bienvenido la tienda"}</h2>
      <AddButton  bottonTitle="add"  />
 </>

  )

}

export default ItemListContainer

import { Link } from "react-router-dom"
import './productCard.css';

const ProductCard = ({ element }) => {

  return (
    <>
      <div className="card">
        <h2 className="cardName">{element.name}</h2>
        <h3 >${element.price}</h3>
        <img src={element.img} alt="" />
        <div >
          <Link style={{ textDecoration: 'none', color: "black", marginLeft: "40%" }} to={`/productDetail/${element.id}`} > Ver detalles </Link>
        </div>
      </div>


    </>
  )
}

export default ProductCard
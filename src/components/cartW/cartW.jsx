
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

export const CartW = () => {

    const { cart } = useContext(CartContext)

    return (


        <Link to="/cart">
            <div

                style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "black",
                    marginButton: "-200%",
                }}

            >

                {cart.length}

            </div>


            <div className="container-cart">
                <BsFillCartCheckFill
                    style={{
                        margingleft: "40%",
                        padding: "10%",
                        fontSize: "3rem",
                        color: "white",
                    }}

                />

            </div>


        </Link>
    );
};
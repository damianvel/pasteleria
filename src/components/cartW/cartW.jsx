
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";


export const CartW = () => {

    return (

        <Link to="/cart">
        <div className="container-cart">
            <BsFillCartCheckFill
                style={{margingleft: "40%",
                    padding: "10%",
                    fontSize: "3rem",
                    color: "white",
                }}

            />
            
        </div>
</Link>
    );
};
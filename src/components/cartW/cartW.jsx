

import { pink } from "@mui/material/colors";
import { BsFillCartCheckFill } from "react-icons/bs";
export const CartW = () => {


let items = 1

    return (
        <div className="container-cart">
            <BsFillCartCheckFill
                style={{margingleft: "40%",
                    padding: "10%",
                    fontSize: "3rem",
                    color: "white",
                }}

            />
            <p class="contador">{items}</p>
        </div>
    );
};
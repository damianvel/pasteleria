
import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs";
export const CartWidget = () => {
  return (
    <div className="container-cart">
      <BsFillCartCheckFill
        style={{
          fontSize: "2rem",
          color: "white",
        }}
        
      />
    </div>
  );
};

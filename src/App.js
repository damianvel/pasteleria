 import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (

<BrowserRouter>
<CartContextProvider> 
<Header/>
<Routes>
<Route path="/" element={<ItemListContainer/> }  />
<Route path="/category" element={<ItemListContainer/> }  />
<Route path="/category/:categoryName" element={<ItemListContainer/> }  />
<Route path="/productDetail/:id" element={<ItemDetailContainer/>}  />
<Route path="/cart" element={<Cart/>}  />
<Route path="" element={<h2>esta pagina no encontrada</h2>}  />
</Routes>
</CartContextProvider>
</ BrowserRouter> 
  )
}
export default App;


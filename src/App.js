import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Header from "./components/header/header";
// import Counter from './components/counter/counter'
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

function App() {

  return (

<BrowserRouter>

<Header/>

<Routes>

<Route path="/" element={<ItemListContainer/> }  />
<Route path="/category" element={<ItemListContainer/> }  />
<Route path="/category/:categoryName" element={<ItemListContainer/> }  />

{/* <Route path="/" element={<Counter stock={10} initial={1} />}  /> */}
<Route path="/productDetail/:id" element={<ItemDetailContainer/>}  />

<Route path="/cart" element={<h2>aca va el carrito</h2>}  />

<Route path="" element={<h2>esta pagina no encontrada</h2>}  />
</Routes>

</ BrowserRouter> 
  );
}
export default App;


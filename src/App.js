
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ResponsiveAppBar from "./components/navBar/NavBar"


function App() {

  return (
    <div>

      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <ItemListContainer greeting={"Bienvenidos a la pasteleria"} />
      </div>
    </div>
  );

}

export default App;




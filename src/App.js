import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bulma/css/bulma.css";
import "./styles/styles.css"

function App() {
    return <>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Tienda Pesca"} />
    </>
}

export default App
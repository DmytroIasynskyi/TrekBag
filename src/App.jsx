import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ItemList from "./components/ItemList.jsx";
import ItemsContextProvider from "./contexts/ItemsContextProvider.jsx";

function App() {

    return (
        <>
            <h1>Trekbag</h1>
            <main>
                <ItemsContextProvider>
                    <Header/>
                    <ItemList/>
                    <Sidebar/>
                </ItemsContextProvider>
            </main>
            <Footer/>
        </>
    )
}

export default App

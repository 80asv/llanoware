import { Routes, HashRouter, Route } from "react-router-dom";
import AgendarTutoria from "./pages/AgendarTutoria";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer/Footer";
import MenuDesplegable from "./components/MenuDesplegable/MenuDesplegable";
import MenuContextProvider from "./context/MenuContext";
import LogoContextProvider from "./context/LogoContext";


function App() {	
	return (
		<MenuContextProvider>
			<LogoContextProvider>
				<HashRouter>
					<MenuDesplegable/>
					<Header/>
					<Routes>
						<Route path="/" element={<Inicio/>}/>
						<Route end path="/nosotros" element={<Nosotros/>}/>
						<Route end path="/agendar" element={<AgendarTutoria/>}/>
						<Route path="/*" element={<h2>Pagina no encontrada</h2>}/>
					</Routes>
					<Footer/>
				</HashRouter>
			</LogoContextProvider>
		</MenuContextProvider>
	);
}

export default App;

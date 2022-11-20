import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgendarTutoria from "./pages/AgendarTutoria";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer/Footer";
import MenuDesplegable from "./components/MenuDesplegable/MenuDesplegable";


function App() {	
	return (
		<div className="App">
			<Router>
				<MenuDesplegable/>
				<Header/>
				<Routes>
					<Route end path="/" element={<Inicio/>}/>
					<Route end path="/nosotros" element={<Nosotros/>}/>
					<Route end path="/agendar" element={<AgendarTutoria/>}/>
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;

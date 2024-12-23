import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<div className="pt-24">
				<Outlet />
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;

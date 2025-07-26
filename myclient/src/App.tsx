import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/login";
import Welcome from "@/pages/Welcome";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Welcome />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

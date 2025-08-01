import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/login";
import Welcome from "@/pages/Welcome";
import SignUp from "@/pages/SignUp";
import SignOut from "@/pages/SignOut";
import Create from "./pages/Create";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Welcome />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/signup' element={<SignUp />}></Route>
					<Route path='/logout' element={<SignOut />}></Route>
					<Route path='/create' element={<Create />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

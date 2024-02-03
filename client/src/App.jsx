import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";

const App = () => {

	const category = localStorage.getItem("linkItem");

	return (
		<div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={`products/${category}`} element={<Products category={category} />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;

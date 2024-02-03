import Navbar from "../../components/Navbar/Navbar"

const Products = ({ category }) => {
	return (
		<div>
			<Navbar />
			Products
			<p>
				{category}
			</p>
		</div>
	)
}

export default Products

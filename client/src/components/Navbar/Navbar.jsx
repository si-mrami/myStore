import './Navbar.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';

const Navbar = () => {

	const [isInputVisible, setInputVisible] = useState(false);

	const handleIconClick = () => {
		setInputVisible(!isInputVisible);
	};

	return (
		<div className="navbar">
			<div className="navbar-centent">
				<div className="left">
					<div className="loginUser">
						<PersonOutlineOutlinedIcon className='icons' />
					</div>
					<div className="cart">
						<ShoppingCartOutlinedIcon className='icons' />
					</div>
					<div className="search">
						<SearchOutlinedIcon className='icons' onClick={handleIconClick} />
						{isInputVisible && (
							<div className="searchInput">
								<input type="text" placeholder='Search...' />
							</div>
						)}
					</div>
				</div>
				<div className="right">right</div>
			</div>
		</div>
	)
}

export default Navbar

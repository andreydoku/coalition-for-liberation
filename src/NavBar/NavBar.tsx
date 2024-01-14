import { Link } from "react-router-dom";

import "./NavBar.scss";
import InnerContainer from "../components/InnerContainer/InnerContainer";

export default function NavBar() {
	
	const logo = "LOGO";
	
	
	return (
		<div className='nav-bar'>
			
			<InnerContainer>
				<div className="left">
					<Link to="/"  className='nav-link'>{logo}</Link>
				</div>
				
				<div className="center">
					<Link to="/"  className='nav-link'>Home</Link>
					<Link to="/events" className='nav-link'>Events</Link>
					<Link to="/about" className='nav-link'>About</Link>
				</div>
				
				<div className="right">
				<Link to="/"  className='nav-link'>Donate</Link>
				</div>
			</InnerContainer>
			
			

		</div>
	)
}



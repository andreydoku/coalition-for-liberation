import { Link } from "react-router-dom";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import "./HomePage.scss";

import heroBanner from "./hero-banner-1080x579.jpg";

import HomepageEvent from "./HomepageEvent/HomepageEvent";

import eventBannerDropImage from "../../assets/banner-drop-jan3.jpg";
import underwaterFlagImage from "../../assets/flag-underwater.jpg";


export default function HomePage() {
	
	const title = "The Coalition for Liberation";
	const subtitle = "We are here to spread awareness about Palestine";
	
	const button1_text = "Learn More";
	const button2_text = "Donate";
	
	//image , title , date , time , location , description
	const events = [
		{
			image: eventBannerDropImage,
			title: "Banner Drop for Palestine",
			date: "Jan 3",
			time: "8am",
			location: "HWY75 / McCommas Blvd",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			image: underwaterFlagImage,
			title: "Scuba Protest",
			date: "Jan 30",
			time: "9am",
			location: "Cozumel, Mexico",
			description: "Join us as we swim for Palestine.  Wave the flag in the current.  Show the fish your support!",
		}
		
	];
	
	
	return (
		<div className="home-page" >
			
			<section className="hero" style={{ backgroundImage: `url(${heroBanner})` }}>
				
				<div className="background-overlay"></div>
				
				<div className="content">
					<h1 className="title">{title}</h1>
					<p className="sub-title">{subtitle}</p>
					<div className="buttons">
						<button className="secondary-cta">{button1_text}</button>
						<button className="primary-cta">{button2_text}</button>
					</div>
					
				</div>
				
			</section>
			
			
			<section className="events-section">
				<InnerContainer>
					<div className="title-bar">
						<h2 className="title">Events</h2>
						<Link to="/events" className="all-events-link">All Events →</Link>
					</div>
					
					<div className="events-list">
						{ events.map( event => 
							<HomepageEvent event={event}/>
						)}
					</div>
					
				</InnerContainer>
			</section>
			
			
			
		</div>
	)
}

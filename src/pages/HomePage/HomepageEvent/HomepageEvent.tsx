import { IoCalendarClear } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

import "./HomepageEvent.scss";

export default function HomepageEvent({ event }) {
	
	const { image , title , date , time , location , description } = event;
	
	return (
		<div className='homepage-event'>
			<div className="left">
				<img src={image} alt={"event image for " + title} />
			</div>
			<div className="right">
				<h3>{title}</h3>
				<div className='when-where'>
					
					<div className="icon-text">
						<IoCalendarClear />
						<p>{date}</p>
					</div>
					
					<div className="icon-text">
						<IoTimeSharp />
						<p>{time}</p>
					</div>
					
					<div className="icon-text">
						<IoLocationSharp />
						<p>{location}</p>
					</div>
					
				</div>
				<p>{description}</p>
			</div>

		</div>
	)
}

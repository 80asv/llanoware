import React from 'react'
import './TimelineItem.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const TimelineItem = ({number, description, transition }) => {

	useEffect(() => {
		AOS.init({duration: 1500});
		AOS.refresh();
	}, []);

	return (
		<div class="timeline-item" data-aos={transition}>
				<div class="timeline-dot"></div>
				<div class="timeline-number">{number}</div>
				<div class="timeline-content">
					<p>{description}</p>
				</div>
		</div>
	)
}

export default TimelineItem
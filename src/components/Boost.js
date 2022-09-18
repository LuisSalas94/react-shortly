import React, { useEffect } from "react";
import bgMovile from "../images/bg-boost-mobile.svg";
import bgDesktop from "../images/bg-boost-desktop.svg";
//Aos animation
import Aos from "aos";
import "aos/dist/aos.css";

const Boost = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);
	return (
		<section data-aos="fade-down" className="boost relative">
			<picture>
				<source media="(min-width: 768px)" srcSet={bgDesktop} />
				<img src={bgMovile} alt="" />
			</picture>
			<div className="flex items-center justify-center flex-col boost-inner">
				<h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
					Boost your links today
				</h2>
				<button className="btn-cta rounded-full">Get Started</button>
			</div>
		</section>
	);
};

export default Boost;

import React, { useEffect } from "react";
import showcase from "../images/illustration-working.svg";
//Aos animation
import Aos from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="py-10 h-screen lg:py-20">
			<div
				data-aos="fade-down-right"
				className="max-width grid mt-10 grid-cols-1 gap-5  md:grid-cols-2 md:gap-10 md:place-items-center md:mt-36 lg:mt-32"
			>
				<article className="text-center md:text-left">
					<h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
						More than just shorter links
					</h1>
					<p className="lg:text-lg text-slate-400 mb-10">
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<button className="btn-cta rounded-full">Get Started</button>
				</article>
				<article>
					<img src={showcase} alt="Shortly" />
				</article>
			</div>
		</section>
	);
};

export default Showcase;

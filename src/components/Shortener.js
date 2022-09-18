import React from "react";
import bgMovileShortener from "../images/bg-shorten-mobile.svg";
import bgDesktopShortener from "../images/bg-shorten-desktop.svg";

const Shortener = () => {
	return (
		<section className="max-width shortener relative">
			<picture>
				<source media="(min-width: 768px)" srcSet={bgDesktopShortener} />
				<img src={bgMovileShortener} alt="bg-shortener" />
			</picture>
			<form className="form">
				<div className="flex flex-col md:flex-row">
					<input
						type="url"
						placeholder="Shorten your link here"
						className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
					/>
					<button
						type="submit"
						className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
					>
						Shorten It!
					</button>
				</div>
			</form>
			<div
				className="flex flex-col items-center justify-center bg-white text-center
				md:flex-row md:justify-between p-3 rounded-lg mt-3 shadow"
			>
				<article>
					<h6 className="mb-3 md:mb-0">original link</h6>
				</article>
				<article>
					<ul className="md:flex md:items-center">
						<li className="md:mr-5">
							<button className="text-cyan-500">shortened link</button>
						</li>
						<li>
							<button className="btn-cta rounded-lg text-sm focus:bg-slate-800">
								copy
							</button>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Shortener;

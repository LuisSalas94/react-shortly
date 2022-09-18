import React, { useState } from "react";
import bgMovileShortener from "../images/bg-shorten-mobile.svg";
import bgDesktopShortener from "../images/bg-shorten-desktop.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncLinks } from "../features/links/linkSlice";
import isValidUrl from "../common/validURL";

const Shortener = () => {
	const [text, setText] = useState("");
	const data = useSelector((state) => state.links.links);
	const [buttonText, setButtonText] = useState("Copy");
	const dispatch = useDispatch();

	let originalLink = "";
	let shortLink = "";

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidUrl(text)) {
			dispatch(fetchAsyncLinks(text));
			setText("");
		} else {
			alert("Please enter a valid link");
		}
	};

	if (data.ok === true) {
		originalLink = data.result.original_link;
		shortLink = data.result.full_short_link;
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(shortLink);
		setButtonText("Copied!");
	};

	return (
		<section className="max-width shortener relative">
			<picture>
				<source media="(min-width: 768px)" srcSet={bgDesktopShortener} />
				<img src={bgMovileShortener} alt="bg-shortener" />
			</picture>
			<form className="form" onSubmit={handleSubmit}>
				<div className="flex flex-col md:flex-row">
					<input
						type="url"
						placeholder="Shorten your link here"
						className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button
						type="submit"
						className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
						onClick={handleSubmit}
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
					<h6 className="mb-3 md:mb-0">{originalLink}</h6>
				</article>
				<article>
					<ul className="md:flex md:items-center">
						<li className="md:mr-5">
							<button className="text-cyan-500">{shortLink}</button>
						</li>
						<li>
							<button
								onClick={handleCopy}
								className="btn-cta rounded-lg text-sm focus:bg-slate-800"
							>
								{buttonText}
							</button>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Shortener;

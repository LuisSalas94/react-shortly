import React, { useState, useEffect } from "react";
import { ShortenerInfo } from "./ShortenerInfo";
import bgMovileShortener from "../images/bg-shorten-mobile.svg";
import bgDesktopShortener from "../images/bg-shorten-desktop.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncLinks } from "../features/links/linkSlice";
import isValidUrl from "../common/validURL";
//Toastify
import { toast } from "react-toastify";
//Aos animation
import Aos from "aos";
import "aos/dist/aos.css";

const Shortener = () => {
	const [text, setText] = useState("");
	const data = useSelector((state) => state.links.links);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidUrl(text)) {
			dispatch(fetchAsyncLinks(text));
			toast.success("Link shortened successfully!");
			setText("");
		} else {
			toast.error("Please enter a valid link");
		}
	};

	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<section data-aos="fade-down-left" className="max-width shortener relative">
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
			{data.ok && <ShortenerInfo />}
		</section>
	);
};

export default Shortener;

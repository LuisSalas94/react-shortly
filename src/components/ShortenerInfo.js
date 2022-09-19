import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromState } from "../features/links/linkSlice";
//Toastify
import { toast } from "react-toastify";

export const ShortenerInfo = () => {
	const data = useSelector((state) => state.links.links);
	const dispatch = useDispatch();
	const [buttonText, setButtonText] = useState("Copy");
	const [secondText, setSecondText] = useState("Remove");

	let originalLink = "";
	let shortLink = "";

	if (data.ok) {
		originalLink = data.result.original_link;
		shortLink = data.result.full_short_link;
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(shortLink);
		toast.success("Copied to clipboard!");
		setButtonText("Copied!");
	};

	const handleRemove = () => {
		dispatch(removeFromState());
		toast.success("Link removed successfully!");
		setSecondText("Removed!");
	};

	return (
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
							className="btn-cta rounded-lg text-sm focus:bg-slate-800 "
						>
							{buttonText}
						</button>
					</li>
					<li>
						<button
							onClick={handleRemove}
							className="btn-cta rounded-lg text-sm focus:bg-slate-800 my-2 md:mx-2"
						>
							{secondText}
						</button>
					</li>
				</ul>
			</article>
		</div>
	);
};

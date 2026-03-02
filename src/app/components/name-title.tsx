"use client";
import React, { useState, useEffect } from "react";

interface NameTitleProps {
	text: string;
}

function NameTitle({ text }: NameTitleProps) {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			if (i < text.length) {
				setDisplayText(text.slice(0, i + 1));
				i++;
			} else {
				clearInterval(interval);
			}
		}, 150);

		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className="w-full flex flex-row justify-center items-center h-fit">
			<h1 className="text-[10vw] font-black italic">{displayText}</h1>
			<span className="text-[10vw] animate-pulse duration-75 select-none">|</span>
		</div>
	);
}

export default NameTitle;

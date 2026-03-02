'use client';

import React from "react";
import NameTitle from "../components/name-title";

function ProjectPage() {
	return (
		<div className="w-screen mt-20 flex flex-col justify-center items-center">
			<NameTitle text="PROJECTS" />
			<a href="../">&lt; Go back</a>
			<div className="border-t-2 border-black w-[50%] mt-2"></div>
			<div className="flex flex-row flex-wrap w-full px-20 max-w-[1000px]">
				<Project title="This page" desc="This website" link="https://dxby.dev" />
			</div>
		</div>
	);
}

const Project = ({
	title,
	desc,
	link,
}: {
	title: string;
	desc: string;
	link: string;
}) => {
	return (
		<div onClick={() => window.open(link)} className="border w-full md:w-[300px] select-none m-5 p-10 rounded-md hover:border-2 cursor-pointer">
			<h1 className="font-bold text-xl">{title}</h1>
			<span>{desc}</span>
		</div>
	);
};

export default ProjectPage;

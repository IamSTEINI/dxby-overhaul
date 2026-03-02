import React from "react";
import NameTitle from "../components/name-title";
import Image from "next/image";

function AboutPage() {
	return (
		<div className="w-screen mt-20 flex flex-col justify-center items-center">
			<NameTitle text="ABOUT" />
            <a href="../">&lt; Go back</a>
			<p className="font-tnr mt-[100px] text-lg">Yes, it&apos;s minimalism - not laziness (0_0 )</p>
			<p className="font-tnr">On this page I show my stuff.</p>
            <Image className="md:mt-[100px] mt-[400px]" src={'/images/sign.png'} width={300} height={300} alt={"STEIN SIGNATURE"}></Image>
		</div>
	);
}

export default AboutPage;

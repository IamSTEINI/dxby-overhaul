'use client'
import Image from "next/image";
import { Spotlight } from "./components/Spotlight";

export default function Home() {
	return (
		<div className="absolute -top-0 w-screen h-screen select-none bg-grad overflow-hidden flex flex-row justify-center items-center">
			<Spotlight width={360}/>
			<Image
				src={"./LINES.svg"}
				width={820}
				height={300}
				alt={"Lines"}
				className="absolute -z-10 md:block hidden fade-in"
			/>
			<Image
				src={"./VEC1.svg"}
				width={420}
				height={300}
				alt={"Vector 1"}
				className="absolute left-7/10 top-64 -z-10 rotate-45 md:block hidden fade-in"
			/>
			<Image
				src={"./VEC2.svg"}
				width={360}
				height={300}
				alt={"Vector 2"}
				className="absolute left-32 -z-10 fade-in"
			/>
			<Image
				src={"./VEC3.svg"}
				width={320}
				height={300}
				alt={"Vector 2"}
				className="absolute left-1/5 top-26 -z-10 fade-in"
			/>
			<h1 className="floating fade-in-slow">STEIN</h1>
		</div>
	);
}

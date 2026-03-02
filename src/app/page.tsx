import NameTitle from "./components/name-title";

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<NameTitle text="STEIN"/>
			<a href="/projects">PROJECTS&nbsp;-&gt;</a>
			<a href="/about">ABOUT&nbsp;&nbsp;&nbsp;&nbsp;-&gt;</a>
			<a href="https://t.me/dxbyte">CONTACT&nbsp;&nbsp;-&gt;</a>
		</div>
	);
}

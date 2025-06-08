"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaHeart, FaMoon, FaSun } from "react-icons/fa6";

type MenuItemProps = {
    href: string;
    icon: React.ReactNode;
    tooltip?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ href, icon, tooltip }) => {
    return (
        <a
            href={href}
            className="rounded-full md:p-2 p-3 border group flex flex-col items-center justify-center"
        >
            {icon}
            {tooltip && (
                <div className="opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 -translate-y-10 group-hover:translate-y-0 pointer-events-none absolute mt-20 z-50 border rounded-md p-1 backdrop-blur-sm transition-all duration-75 ease-in">
                    <span className="text-xs">{tooltip}</span>
                </div>
            )}
        </a>
    );
};

const NavBar: React.FC = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");

        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    
    return (
        <div className="w-full h-14 z-[10000] flex flex-row gap-x-5 justify-center items-center">
            <MenuItem 
                href="mailto:stein@dxby.dev" 
                icon={<FaEnvelope />} 
                tooltip="Send mail" 
            />
            <MenuItem 
                href="https://ko-fi.com/dxbyte" 
                icon={<FaHeart />}
                tooltip="Donate"
            />
            <MenuItem 
                href="https://github.com/IamSTEINI" 
                icon={<FaGithub />}
                tooltip="Github"
            />
            
            <button
                onClick={toggleTheme}
                className="rounded-full md:p-2 p-3 border group flex flex-col items-center justify-center"
            >
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            
            <div className="w-11/12 h-[1px] mt-14 absolute bg-[#6A5584] "></div>
        </div>
    );
};

export default NavBar;

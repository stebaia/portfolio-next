"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }: { href: string, title: string }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link 
			href={href} 
			className={`${
				isActive 
					? "text-white font-bold" 
					: "text-[#ADB7BE] hover:text-white"
			} transition-colors duration-300`}
		>
			{title}
		</Link>
	);
};

export default NavLink;
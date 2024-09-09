import Link from "next/link";
import React from "react";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({href, title}) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-[#ADB7BE] hover:text-white">{title}</Link>
    ); 
}

export default NavLink;
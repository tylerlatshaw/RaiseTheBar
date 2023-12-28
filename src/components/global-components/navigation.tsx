"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import { useState } from "react";
import { mobileLinkIcons, navigationLinks } from "../../app/lib/navigation-links";
import HomeIcon from "@mui/icons-material/Home";
import SvgIcon from "@mui/icons-material/Home";
import { Twirl as Hamburger } from "hamburger-react";
import SigninButton from "./sign-in-button";

function lookupMobileIcon(pageName: string) {
    return mobileLinkIcons.find(mobileLinkIcons => mobileLinkIcons.display === pageName)?.icon ?? HomeIcon;
}

export default function Navigation() {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    let mobileMenuButtonColor = "#000000";
    isOpen ? mobileMenuButtonColor = "#0284c7" : mobileMenuButtonColor = "#000000"; // sky-600

    if (typeof document !== "undefined") {
        isOpen ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "scroll";
    }

    const desktopMenuList = navigationLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className={"font-medium pt-4 pb-3 px-2 no-underline hover:text-sky-600 border-b-[6px] hover:border-sky-600 text-center" + (menuItem.link === pathname ? " border-sky-600 text-sky-600" : " border-transparent")}>
            {menuItem.display}
        </Link>
    );

    const loggedInFeatureDesktop = <>
        <SigninButton />
        {/* <Avatar src={""} className="shadow-md rounded-full bg-blue-300" /> */}
    </>;

    const mobileMenuList = navigationLinks.map((menuItem) =>
        <div key={menuItem.display} className="mobile-menu group flex items-center w-full">
            <li className="flex items-center w-full group-hover:text-sky-600">
                <Link key={menuItem.display} href={menuItem.link} onClick={() => { router.push(menuItem.link); setIsOpen(false); }} className="flex items-center w-full">
                    <SvgIcon component={lookupMobileIcon(menuItem.display)} className="inline-block align-middle text-4xl" />
                    <span className="inline-block align-top rounded-md px-3 py-3">{menuItem.display}</span>
                </Link>
            </li>
        </div>
    );

    const loggedInFeatureMobile = <>
        <SigninButton />
        {/* <Avatar src={""} className="shadow-md rounded-full bg-blue-300" /> */}
    </>;

    return (
        <>
            <nav className="fixed md:relative w-full right-0 top-0 z-30 bg-white shadow px-3 py-2 md:py-0">
                <div className="container mx-auto">
                    <div className="flex justify-between">

                        {/* Logo */}
                        <div className="flex space-x-7">
                            <div className="m-auto">
                                <a className="flex items-center no-underline hover:no-underline font-bold text-2xl lg:text-3xl" href="/">
                                    {/* <span className="py-1">Weight Lifting Tracker</span> */}
                                    <Image src={"/static/raise-the-bar-logo.svg"} height={50} width={338} className="drop-shadow" alt="logo" priority={true} />
                                </a>
                            </div>
                        </div>

                        {/* Navbar items */}
                        <div className="desktop-only flex items-center space-x-3">
                            {
                                desktopMenuList
                            }
                            {
                                loggedInFeatureDesktop
                            }
                        </div>

                        {/* Mobile menu button */}
                        <div className="mobile-only flex items-center z-50">
                            <button className="outline-none">
                                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} rounded label="Show menu" color={mobileMenuButtonColor} hideOutline={false} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen ? <>
                    <div className="w-full h-full fixed flex items-center top-0 left-0 bg-gray-900 md:hidden shadow p-3 z-40 text-white">
                        <div className="mobile-menu fixed block w-full p-8 text-2xl leading-none">
                            <ul className="space-y-10 w-full">
                                {
                                    mobileMenuList
                                }
                            </ul>
                        </div>
                        {
                            loggedInFeatureMobile
                        }
                    </div>
                </> : null}
            </nav>

        </>
    );
}
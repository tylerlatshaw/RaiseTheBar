"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mobileLinkIcons, navigationLinks } from "../../app/lib/navigation-links";
import HomeIcon from "@mui/icons-material/Home";
import SvgIcon from "@mui/icons-material/Home";
import { Twirl as Hamburger } from "hamburger-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import DesktopNavigationMenu from "./navigation-desktop-menu";

import type { User } from "@supabase/auth-helpers-nextjs";

function lookupMobileIcon(pageName: string) {
    return mobileLinkIcons.find(mobileLinkIcons => mobileLinkIcons.display === pageName)?.icon ?? HomeIcon;
}

export default function Navigation() {
    const router = useRouter();
    const [user, setUser] = useState<User>();

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user!);
        }

        getUser();
    });

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    let mobileMenuButtonColor = "#000000";
    isOpen ? mobileMenuButtonColor = "#38bdf8" : mobileMenuButtonColor = "#000000"; // sky-400

    if (typeof document !== "undefined") {
        isOpen ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "scroll";
    }

    const mobileMenuList = navigationLinks.map((menuItem) =>
        <div key={menuItem.display} className="mobile-menu group flex items-center w-full">
            <li className="flex items-center w-full group-hover:text-sky-400">
                <Link key={menuItem.display} href={menuItem.link} onClick={() => { router.push(menuItem.link); setIsOpen(false); }} className="flex items-center w-full">
                    <SvgIcon component={lookupMobileIcon(menuItem.display)} className="inline-block align-middle text-4xl" />
                    <span className="inline-block align-top rounded-md px-3 py-3">{menuItem.display}</span>
                </Link>
            </li>
        </div>
    );

    return (
        <>
            <nav className="fixed md:relative w-full right-0 top-0 z-30 bg-white shadow-lg px-3 py-2 md:py-0">
                <div className="container mx-auto">
                    <div className="flex justify-between">

                        {/* Logo */}
                        <div className="flex">
                            <div className="m-auto">
                                <a className="flex items-center no-underline hover:no-underline font-bold text-2xl lg:text-3xl" href="/">
                                    {/* <span className="py-1">Weight Lifting Tracker</span> */}
                                    <Image src={"/static/raise-the-bar-logo.svg"} height={50} width={338} className="drop-shadow" alt="logo" priority={true} />
                                </a>
                            </div>
                        </div>

                        {/* Navbar items */}
                        <div className="desktop-only flex items-center space-x-3">
                            <DesktopNavigationMenu navigationLinks={navigationLinks} pathname={pathname} user={user!} />
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
                {
                    isOpen ? <>
                        <div className="w-full h-full fixed flex items-center top-0 left-0 bg-sky-950 md:hidden shadow p-3 z-40 text-white">
                            <div className="mobile-menu fixed block w-full p-8 text-2xl leading-none">
                                <ul className="space-y-10 w-full">
                                    {
                                        mobileMenuList
                                    }
                                </ul>
                            </div>
                        </div>
                    </> : null
                }
            </nav>

        </>
    );
}
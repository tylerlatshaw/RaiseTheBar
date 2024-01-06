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
import { Avatar, Button } from "@material-tailwind/react";
import LoginIcon from "@mui/icons-material/Login";
import GenerateUserFlyout from "./user-menu-flyout";

function lookupMobileIcon(pageName: string) {
    return mobileLinkIcons.find(mobileLinkIcons => mobileLinkIcons.display === pageName)?.icon ?? HomeIcon;
}

export default function Navigation() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
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

    const desktopMenuList = navigationLinks.map((menuItem) =>
        menuItem.link !== "/sign-in" ? <>
            <Link key={menuItem.display} href={menuItem.link} className={"font-medium pt-4 pb-3 px-2 no-underline hover:text-sky-600 border-b-[6px] hover:border-sky-600 text-center" + (menuItem.link === pathname ? " border-sky-600 text-sky-600" : " border-transparent")}>
                {menuItem.display}
            </Link>
        </> : (
            !user ? <>
                <Link key={menuItem.display} href={menuItem.link} className="font-medium">
                    <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2">
                        <span className="pl-1 pr-3 lg:px-2">
                            <LoginIcon />
                        </span>
                        <span className="pr-4 hidden lg:flex normal-case">{menuItem.display}</span>
                    </Button>
                </Link>
            </> : <>
                <GenerateUserFlyout />
            </>
        )
    );

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
                            {
                                desktopMenuList
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
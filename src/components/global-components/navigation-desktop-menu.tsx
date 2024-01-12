"use client";

import Link from "next/link";
import { Button } from "@material-tailwind/react";
import LoginIcon from "@mui/icons-material/Login";
import UserPopover from "./user-popover";

import type { NavigationLinkType } from "@/app/lib/type-library";
import type { User } from "@supabase/supabase-js";

export default function DesktopNavigationMenu(props: { navigationLinks: NavigationLinkType[]; pathname: string; user: User; }) {

    const data = props.navigationLinks.map((menuItem) =>
        menuItem.link !== "/sign-in" ? <>
            <Link key={menuItem.display} href={menuItem.link} className={"font-medium pt-4 pb-3 px-2 no-underline hover:text-sky-600 border-b-[6px] hover:border-sky-600 text-center" + (menuItem.link === props.pathname ? " border-sky-600 text-sky-600" : " border-transparent")}>
                {menuItem.display}
            </Link>
        </> : (
            !props.user ? <>
                <Link key={menuItem.display} href={menuItem.link} className="font-medium">
                    <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal normal-case bg-sky-600 hover:bg-sky-700 drop-shadow-md py-2 px-2">
                        <span className="pl-1 pr-3 lg:px-2">
                            <LoginIcon />
                        </span>
                        <span className="pr-4 hidden lg:flex">{menuItem.display}</span>
                    </Button>
                </Link>
            </> : <>
                <UserPopover userInitials={props.user.user_metadata.initials} />
            </>
        )
    );

    return data;
}
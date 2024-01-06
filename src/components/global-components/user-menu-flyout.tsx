"use client";

import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GenerateUserFlyout() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        }

        getUser();
    });

    const handleSignOut = async () => {
        await supabase.auth.signOut();

        console.log("reached");

        router.push("/");
        setUser(null);
    };

    return <>
        <div className="flex flex-col">

            <Popover placement="bottom" dismiss={{ outsidePress: true, outsidePressEvent: "mousedown", referencePress: true, referencePressEvent: "pointerdown" }}>
                <PopoverHandler>
                    <Button className="flex items-center text-center h-12 w-12 p-0 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-md">
                        <span className="w-full font-semibold text-2xl uppercase">TL</span>
                    </Button>
                </PopoverHandler>
                <PopoverContent>
                    <div className="text-base">
                        <div className="flex flex-col divide-y">
                            <Link href={"/my-account"} className="p-2 hover:text-sky-600">
                                <HomeIcon />
                                <span className="pl-2">My Account</span>
                            </Link>
                            <span onClick={handleSignOut} className="p-2 cursor-pointer hover:text-sky-600">
                                <LogoutIcon />
                                <span className="pl-2">Sign Out</span>
                            </span>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    </>;
}
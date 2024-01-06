import Link from "next/link";
import BlockIcon from "@mui/icons-material/Block";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function Status401() {
    return <>
        <div className="flex flex-wrap w-full mx-auto pt-28 md:pt-36">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-3 md:mt-16">

                <div className="self-center text-center">
                    <h1 className="w-full text-[8rem] md:text-[12rem] leading-none font-bold">401</h1>
                </div>

                <div className="self-center text-center mt-6 text-[6rem] md:text-[9rem]">
                    <BlockIcon className="leading-none my-8 md:m-0" sx={{ fontSize: "inherit" }} />
                    <h2 className="w-full text-4xl md:text-5xl mt-6 leading-none font-bold no-underline">Access Denied</h2>
                </div>

            </div>

            <div className="flex justify-center w-full mt-24 mb-8 md:mt-32 md:mb-0">
                <Link href={"/sign-in"} className="font-medium">
                    <Button className="flex flex-row items-center text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 drop-shadow-lg py-3 px-2 text-white rounded-lg">
                        <span className="pl-1 pr-3 lg:px-2">
                            <LoginIcon />
                        </span>
                        <span className="pr-4 hidden lg:flex normal-case">Sign In</span>
                    </Button>
                </Link>
            </div>

        </div>
    </>;
}
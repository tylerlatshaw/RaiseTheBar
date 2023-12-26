import Link from "next/link";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Page() {
    return <>
        <div className="h-full px-4 md:px-0 mb-16 md:mb-40">
            <div className="container flex flex-wrap w-full mx-auto pt-28 md:pt-36">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-3 md:mt-16">

                    <div className="self-center text-center">
                        <h1 className="w-full text-[8rem] md:text-[12rem] leading-none font-bold">404</h1>
                    </div>

                    <div className="self-center text-center mt-6 text-[6rem] md:text-[9rem]">
                        <FolderOffOutlinedIcon className="leading-none my-8 md:m-0" sx={{ fontSize: "inherit" }} />
                        <h2 className="w-full text-4xl md:text-5xl mt-6 leading-none font-bold no-underline">Page Not Found</h2>
                    </div>

                </div>

                <div className="flex justify-center w-full mt-24 mb-8 md:mt-32 md:mb-0">
                    <Link href="/" className="drop-shadow-lg">
                        <Button className="absolute z-50 right-0 left-0 bottom-0 m-3 p-3 text-base font-normal tracking-normal leading-normal bg-sky-600 hover:bg-sky-700 shadow shadow-slate-500 rounded" variant="contained">
                            <>Go Back Home&nbsp;<SendIcon className="text-lg flex items-center" /></>
                        </Button>
                    </Link>
                </div>

            </div>
        </div>    </>;
}
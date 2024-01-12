"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";
import GitCommands from "./..//my-account/git-commands";
import NetlifyCommands from "./..//my-account/netlify-commands";
import NodeCommands from "./../my-account/node-commands";
import SupabaseCommands from "./../my-account/supabase-commands";

import type { MyAccountItemType } from "./../../app/lib/type-library";

const accordionItems: MyAccountItemType[] = [
    {
        title: "Supabase Commands",
        content: <SupabaseCommands />
    },
    {
        title: "Node Commands",
        content: <NodeCommands />
    },
    {
        title: "Git Commands",
        content: <GitCommands />
    },
    {
        title: "Netlify Commands",
        content: <NetlifyCommands />
    }
];

export default function Accordion() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [activePageName, setActivePageName] = useState<string>("Supabase Commands");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (index: number, pageName: string) => {
        setActiveIndex(index);
        setIsOpen(false);
        setActivePageName(pageName);
    };

    const desktopActiveClasses = "w-full py-8 bg-white border-l-8 border-y-2 border-sky-600 border-r-2 border-r-transparent first:rounded-tl-lg last:rounded-bl-lg";
    const desktopInactiveClasses = "w-full py-8 bg-gray-300 border-l-8 border-l-transparent border-r-2 border-sky-600 border-t-2 border-t-gray-400 first:border-t-transparent border-b-2 border-b-transparent hover:bg-sky-600 hover:text-white first:rounded-tl-lg last:rounded-bl-lg";

    const mobileActiveClasses = "flex items-center w-full bg-sky-600 text-white hover:bg-sky-600 hover:text-white last:rounded-b-lg";
    const mobileInactiveClasses = "flex items-center w-full bg-gray-300 hover:bg-sky-600 hover:text-white last:rounded-b-lg";

    return (
        <>
            <div className="flex flex-col md:flex-row w-full">
                <div className="z-10 desktop-only flex flex-col w-full md:w-1/5">
                    <div className="shadow-lg shadow-gray-300">
                        {accordionItems.map((item: MyAccountItemType, index: number) => (
                            index === activeIndex ?
                                <>
                                    <button key={item.title} onClick={() => handleClick(index, item.title)} className={desktopActiveClasses}>
                                        {item.title}
                                    </button>
                                </> : <>
                                    <button key={item.title} onClick={() => handleClick(index, item.title)} className={desktopInactiveClasses}>
                                        {item.title}
                                    </button>
                                </>
                        ))}
                    </div>
                    <div className="w-full h-full border-r-2 border-sky-600"></div>
                </div>

                <div className="mobile-only mb-6 border-2 border-sky-600 rounded-lg">
                    <div className={"w-full pl-3 pr-1 text-left" + (isOpen ? " rounded-t-lg" : " rounded-lg")}>
                        <span className="flex flex-row font-semibold">
                            <div className="flex items-center basis-full">
                                <span>Navigation</span>
                                <span className="text-gray-500 font-light">&nbsp;/ {activePageName}</span>
                            </div>
                            <span className="flex items-center">
                                <Hamburger toggled={isOpen} toggle={setIsOpen} size={18} rounded label="Show menu" color={isOpen ? "#0284c7" : "#000000"} hideOutline={false} />
                            </span>
                        </span>
                    </div>

                    {isOpen ? <>
                        {accordionItems.map((item: MyAccountItemType, index: number) => (
                            index === activeIndex ?
                                <>
                                    <li key={item.title} className={mobileActiveClasses}>
                                        <button className="w-full px-3 py-3" onClick={() => { handleClick(index, item.title); }}>
                                            {item.title}
                                        </button>
                                    </li>
                                </> : <>
                                    <li key={item.title} className={mobileInactiveClasses}>
                                        <button className="w-full px-3 py-3" onClick={() => { handleClick(index, item.title); }}>
                                            {item.title}
                                        </button>
                                    </li>
                                </>
                        ))}
                    </> : null}
                </div>

                <div className="z-20 bg-white w-full md:w-4/5 p-4 border-2 md:border-y-2 md:border-r-2 md:border-l-0 border-sky-600 rounded-lg md:rounded-l-none">
                    {accordionItems.map((item: MyAccountItemType, index: number) => (
                        index === activeIndex ?
                            <>
                                {item.content}
                            </> : null
                    ))}
                </div>
            </div>
        </>
    );
}
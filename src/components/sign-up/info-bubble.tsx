import React from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";
import InfoIcon from "@mui/icons-material/Info";

export function InfoBubble() {
    const [openPopover, setOpenPopover] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };

    return (
        <div id="popover" className="w-fit">
            <Popover open={openPopover} handler={setOpenPopover}>
                <PopoverHandler {...triggers}>
                    <span className="flex flex-row items-center text-gray-600 text-sm pt-1">
                        <InfoIcon className="h-4" />
                        <span>What is an access code?</span>
                    </span>
                </PopoverHandler>
                <PopoverContent {...triggers} className="z-50 max-w-[14rem]">
                    At this time, only select users are able to sign up for an account with Raise the Bar. If you require an access code, please email us at <a href="mailto:tyler@tylerlatshaw.com" className="text-sky-600 hover:text-sky-700">tyler@tylerlatshaw.com</a>.
                </PopoverContent>
            </Popover>
        </div>
    );
}
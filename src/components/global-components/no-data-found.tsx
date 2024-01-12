import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

export default function NoDataFound(modifier: string) {
    return (
        <>
            <div className="text-gray-400 p-3">
                <div>
                    <FolderOffOutlinedIcon className="text-6xl"/>
                </div>
                <div className="pt-2 text-base font-semibold">
                    No {modifier} Found
                </div>
            </div>
        </>
    );
}
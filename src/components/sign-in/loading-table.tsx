export default function LoadingTable() {
    return <>
        <div className="flex flex-col w-full md:w-fit space-y-6 mx-auto p-4 md:p-8 bg-gray-300 rounded shadow-md">
            <div className="w-full md:w-96 p-4 bg-white space-y-2">
                <div className="animate-pulse h-2 bg-gray-400 rounded"></div>
                <div className="animate-pulse h-2 bg-gray-400 rounded"></div>
            </div>
            <div className="flex flex-col">
                <div className="w-full md:w-96 p-4 bg-white space-y-2">
                    <div className="animate-pulse h-2 bg-gray-400 rounded"></div>
                    <div className="animate-pulse h-2 bg-gray-400 rounded"></div>
                </div>
                <div className="flex justify-end self-end animate-pulse h-2 w-1/3 bg-gray-400 mt-2"></div>
            </div>

            <div className="flex flex-row space-x-4 mx-auto">
                <div className="flex bg-sky-600 drop-shadow-md p-4 rounded-lg">
                    <div className="animate-pulse h-3 w-24 bg-sky-800"></div>
                </div>
            </div>

            <div className="flex w-full">
                <div className="mx-auto animate-pulse h-2 w-1/2 bg-gray-400 mt-2"></div>
            </div>
        </div>
    </>;
}
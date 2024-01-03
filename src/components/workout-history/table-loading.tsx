import { Card } from "@material-tailwind/react";

export default function Page() {

    const headTR = <>
        <tr>
            <th className="px-2 py-4 bg-sky-300 border-b-4 border-sky-500 first:rounded-tl-lg last:rounded-tr-lg">
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-2/3 bg-sky-500 rounded"></div>
                    <div className="mobile-only animate-pulse h-6 mt-px w-2/3 bg-sky-500 rounded"></div>
                </div>
            </th>
            <th className="px-2 py-4 bg-sky-300 border-b-4 border-sky-500 first:rounded-tl-lg last:rounded-tr-lg">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-2/3 md:w-1/3 bg-sky-500 rounded"></div>
                </div>
            </th>
            <th className="px-2 py-4 bg-sky-300 border-b-4 border-sky-500 first:rounded-tl-lg last:rounded-tr-lg">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-2/3 md:w-2/5 bg-sky-500 rounded"></div>
                </div>
            </th>
            <th className="px-2 py-4 bg-sky-300 border-b-4 border-sky-500 first:rounded-tl-lg last:rounded-tr-lg">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-2/3 md:w-1/4 bg-sky-500 rounded"></div>
                </div>
            </th>
        </tr>
    </>;

    const bodyTR = <>
        <tr className="px-2 border-b border-gray-300">
            <td className="md:flex md:flex-row items-center p-2 leading-none bg-gray-200">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse desktop-only h-6 w-6 mx-1 bg-gray-400 shadow-md rounded-full"> </div>
                    <div className="animate-pulse mx-2 my-1 h-6 w-2/5 bg-gray-400 rounded"></div>
                </div>
            </td>
            <td className="p-2 leading-none bg-gray-200">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-1/2 bg-gray-400 rounded"></div>
                </div>
            </td>
            <td className="p-2 leading-none bg-gray-200">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-1/2 bg-gray-400 rounded"></div>
                </div>
            </td>
            <td className="p-2 leading-none bg-gray-200">
                <div className="flex flex-row justify-center md:justify-start items-center w-full">
                    <div className="animate-pulse h-6 w-3/4 bg-gray-400 rounded"></div>
                </div>
            </td>
        </tr>
    </>;

    return <>
        <Card className="h-full w-full rounded-lg border border-gray-300">
            <table className="w-full shadow-lg rounded-lg table-fixed">
                <thead>
                    {
                        headTR
                    }
                </thead>
                <tbody>
                    {
                        [...Array(5)].map(() => bodyTR)
                    }
                </tbody>
            </table>
        </Card>
    </>;
}
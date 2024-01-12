import Status401 from "@/components/global-components/status-401";

export default function Page() {
    return <>
        <meta name="robots" content="noindex,nofollow" />
        <div className="h-full px-4 md:px-0 mb-16 md:mb-40">
            <Status401 />
        </div>
    </>;
}
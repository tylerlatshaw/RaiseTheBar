import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownContents from "@/app/lib/cli-commands/supabase-commands.md";

export default function Page() {

    return <>
        <div className="cli-commands" id="markdown-div">
            <Markdown remarkPlugins={[remarkGfm]}>{MarkdownContents}</Markdown>
        </div>
    </>;
}
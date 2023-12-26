import { Metadata } from "next";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";
import fs from "fs";

export const metadata: Metadata = {
    title: "Sign In",
};

export default function Page() {

    async function getMarkdown() {

        const rawMarkdown: string = await new Promise((resolve, reject) => {
            return fs.readFile("public/static/cli-commands.md", { encoding: "utf8" }, (err, data) => {
                if (err) {
                    return reject(err);
                }
                return resolve(data);
            });
        });

        const parsedMarkdown = marked.parse(rawMarkdown);
        const cleanData = sanitize(parsedMarkdown.toString());

        return <><div dangerouslySetInnerHTML={{ __html: cleanData }}></div></>;
    }

    return <>
        <div className="cli-commands">
            {
                getMarkdown()
            }
        </div>
    </>;
}
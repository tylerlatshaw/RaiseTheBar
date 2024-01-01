import { footerLinks } from "@/app/lib/navigation-links";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="w-full pt-8 pb-4 text-center">
                <div className="flex flex-row justify-center pb-2 divide-x divide-black" id="footer-links">
                    {
                        footerLinks.map((link) => (
                            <Link href={link.link} key={link.display} className="px-3 hover:text-sky-600">{link.display}</Link>
                        ))
                    }
                </div>
                <div id="copyright">
                    &copy; {new Date().getFullYear()} <a href="http://tylerlatshaw.com" target="_blank" className="hover:text-sky-600">Tyler J. Latshaw</a>. All rights reserved.
                </div>
            </div>
        </>
    );
}
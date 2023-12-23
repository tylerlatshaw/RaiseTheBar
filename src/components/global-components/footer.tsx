export default function Footer() {
    return (
        <>
            <div className="w-full pt-8 pb-6 text-center" id="copyright">
                &copy; {new Date().getFullYear()} <a href="http://tylerlatshaw.com" target="_blank">Tyler J. Latshaw</a>. All rights reserved.
            </div>
        </>
    );
}
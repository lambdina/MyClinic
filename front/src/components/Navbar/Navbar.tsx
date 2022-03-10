import {Head} from "./Head";

export const Navbar = () => {
    const fixedStyle: string = (window.location.href === window.location.origin)? "fixed " : "";

    return (
        <nav className={fixedStyle + "bg-white top-0 w-full text-gray-800 dark:text-white py-2.5 shadow-lg"}>
            <div className="container flex flex-wrap justify-between items-center mx-auto py-3">
                <Head />

            </div>
        </nav>
    )
}
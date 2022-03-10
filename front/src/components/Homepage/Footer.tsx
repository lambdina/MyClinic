export function Footer() {
    return (
        <footer className="justify-center bg-white">
            <div className="container justify-center px-8 mx-auto">
                <div className="flex flex-col justify-center w-full py-6 md:flex-row">
                    <div className="flex-1">
                        <p className="justify-center text-gray-500 uppercase md:mb-6">Links</p>
                        <ul className="justify-center mb-6 list-reset">
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">FAQ</a>
                            </li>
                            <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Help</a>
                            </li>
                            <li className="inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="justify-center flex-1">
                        <p className="justify-center text-gray-500 uppercase md:mb-6">Legal</p>
                        <ul className="mb-6 list-reset">
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Terms</a>
                            </li>
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="justify-center flex-1">
                        <p className="justify-center text-gray-500 uppercase md:mb-6">Company</p>
                        <ul className="justify-center mb-6 list-reset">
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Official Blog</a>
                            </li>
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">About Us</a>
                            </li>
                            <li className="justify-center inline-block mt-2 mr-2 md:block md:mr-0">
                                <a href="/" className="justify-center text-gray-800 no-underline hover:underline hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

import Logo from "../../styles/logo.png";


export function Head() {
    return (
        <div className="flex">
            <a className="font-bold text-gray-800 no-underline toggleColour hover:no-underline" href="/">
                <img className="w-40 h-15" src={Logo}/>
            </a>
        </div>
    )
}
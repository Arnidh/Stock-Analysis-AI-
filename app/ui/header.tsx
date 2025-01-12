import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="flex items-center p-5">
            <a href="/">
            <h1 className="text-5xl font-sans font-black">Stock Analysis AI 〽️</h1>
            </a>
            <h1 className="text-5xl font-sans font-black">|</h1>
            <Navbar/>
        </header>
    )
}
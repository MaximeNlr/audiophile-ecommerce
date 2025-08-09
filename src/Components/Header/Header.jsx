import { Link } from "react-router-dom"
import Cart from "../Cart/Cart";
import { useLocation } from "react-router-dom";

export default function Header() {

    const { pathname } = useLocation()

    return (
        <header className="hidden relative lg:flex flex-row justify-between items-center bg-[var(--custom-black2)] px-40 h-[97px] py-5 text-white">
            <div className="absolute top-[97px] left-1/2 -translate-x-1/2 w-[calc(100%-20rem)] h-[1px] bg-white opacity-50"></div>
            <Link
                to="/"
                className="cursor-pointer"
            >
                <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
            </Link>
            <nav className="flex flex-row items-center gap-10 font-medium tracking-[2px]">
                <Link
                    to="/"
                    className={pathname === '/' ? 'text-[var(--custom-orange)]' : 'header-footer-link'}
                >
                    HOME
                </Link>
                <Link
                    to="/headphones"
                    className={pathname === '/headphones' ? 'text-[var(--custom-orange)]' : 'header-footer-link'}
                >
                    HEADPHONES
                </Link>
                <Link
                    to="/speakers"
                    className={pathname === '/speakers' ? 'text-[var(--custom-orange)]' : 'header-footer-link'}
                >
                    SPEAKERS
                </Link>
                <Link
                    to="/earphones"
                    className={pathname === '/earphones' ? 'text-[var(--custom-orange)]' : 'header-footer-link'}
                >
                    EARPHONES
                </Link>
            </nav>
            <div className="text-2xl">
                <Cart />
            </div>
        </header>
    )
}
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function tabletFooter() {

    const { pathname } = useLocation()

    return (
        <footer className="hidden relative md:grid lg:hidden md:grid-cols-1 gap-10 px-10 py-20 bg-[var(--custom-black2)] text-white">
            <div className="absolute h-1 w-[100px] -translate-x-1/2 top-0 left-40 bg-[var(--custom-orange)]"></div>
            <div className="flex flex-col gap-8 items-start">
                <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
                <nav className="flex flex-row  gap-4 tracking-[2px] uppercase mt-6 lg:hidden">
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
                <p className="opacity-50">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className="flex flex-row items-center lg:items-end justify-between gap-10">
                <p className="font-semibold opacity-50">Copyright 2021. All Rights Reserved</p>
                <div className="flex flex-row gap-5">
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
                </div>
            </div>
        </footer>
    )
}
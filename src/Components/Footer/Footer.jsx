import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Footer() {

    const { pathname } = useLocation()

    return (
        <footer className=" md:hidden lg:grid relative grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-40 pb-[calc(40px+env(safe-area-inset-bottom))] pt-10 lg:py-20 bg-[var(--custom-black2)] text-white">
            <div className="absolute h-1 w-1/3 lg:w-[101px] left-1/2 -translate-x-1/2 lg:top-0 lg:left-40 lg:-translate-0 bg-[var(--custom-orange)]"></div>
            <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
                <nav className="flex flex-col items-center gap-4 tracking-[2px] uppercase mt-6 lg:hidden">
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
                <p className="opacity-50 max-w-md text-[17px] leading-[25px]">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.
                </p>
                <p className="font-semibold opacity-50 text-[17px] leading-[25px]">Copyright 2021. All Rights Reserved</p>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-between gap-10">
                <nav className="hidden lg:flex flex-row gap-6 tracking-[2px] uppercase">
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
                <div className="flex flex-row gap-5">
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
                    <img className="cursor-pointer" src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
                </div>
            </div>
        </footer>
    )
}
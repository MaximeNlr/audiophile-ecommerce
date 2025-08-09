import NewProduct from "../../Components/New_product/NewProduct"
import ProductCategories from "../../Components/Product_categories/ProductCategories"
import About from "../../Components/About/About"
import data from "../../data/data.json"
import { Link } from "react-router-dom"

export default function Home() {

    const product1 = data.find(product => product.slug === "zx9-speaker")
    const product2 = data.find(product => product.slug === "zx7-speaker")
    const product3 = data.find(product => product.slug === "yx1-earphones")

    return (
        <div className="">
            <NewProduct />
            <ProductCategories />
            <div className="lg:relative lg:h-[600px] lg:flex lg:-flex-row lg:justify-around bg-[var(--custom-orange)] bg-[url('/assets/home/desktop/pattern-circles.svg')]
                bg-contain bg-no-repeat text-white py-10 lg:py-0 px-5 mt-32 mx-5 md:mx-10 lg:mx-40 rounded-lg lg:overflow-hidden">
                <div className="lg:relative top-32">
                    <picture>
                        <source media="(min-width:1024px)" srcSet="/assets/home/desktop/image-speaker-zx9.png" />
                        <source media="(min-width:640px)" srcSet="/assets/home/tablet/image-speaker-zx9.png" />
                        <img
                            className="w-[200px] lg:w-[400px] m-auto"
                            src="/assets/home/mobile/image-speaker-zx9.png"
                            alt=""
                        />
                    </picture>
                </div>
                <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-baseline lg:justify-center lg:w-1/3">
                    <h2 className="flex flex-col text-4xl font-semibold tracking-[2px] md:text-6xl py-5">ZX9<span>SPEAKER</span></h2>
                    <p className="opacity-75 font-medium md:w-1/2 lg:w-fit">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                    <Link
                        to="/view/zx9-speaker"
                        state={{ data: product1 }}
                        className="secondary-btn"
                    >
                        SEE PRODUCT
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-8 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]
                bg-no-repeat bg-cover mx-5 rounded-lg overflow-hidden mt-10 h-[400px] px-8 lg:px-40 md:mx-10 lg:mx-40"
            >
                <h2 className="text-3xl font-semibold">ZX7 SPEAKER</h2>
                <Link
                    to="/view/zx7-speaker"
                    state={{ data: product2 }}
                    className="secondary-btn"
                >
                    SEE PRODUCT
                </Link>
            </div>
            <div className="flex flex-col gap-10 md:flex-row lg:gap-5 md:mt-10 md:mx-10 lg:mx-40 mt-10 lg:mt-10">
                <div className="mx-5 md:mx-0 rounded-lg md:w-1/2 md:h-[320px] overflow-hidden">
                    <picture>
                        <source media="(min-width:1024px)" srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
                        <source media="(min-width:640px)" srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
                        <img
                            className="object-cover rounded-lg md:w-full"
                            src="/assets/home/mobile/image-earphones-yx1.jpg"
                            alt="/assets/home/mobile/image-earphones-yx1.jpg"
                        />
                    </picture>
                </div>
                <div className="flex flex-col gap-10 justify-center px-8 mx-5 md:mx-0 h-[200px] md:w-1/2 md:h-[320px] lg:w-1/2 bg-[var(--custom-grey)] lg:mt-0 rounded-lg">
                    <h2 className="text-3xl font-semibold">YX1 EARPHONES</h2>
                    <Link
                        to="/view/yx1-earphones"
                        state={{ data: product3 }}
                        className="secondary-btn"
                    >
                        SEE PRODUCT
                    </Link>
                </div>
            </div>
            <About />
        </div >
    )
}
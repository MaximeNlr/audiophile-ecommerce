import ProductCategories from "../../Components/Product_categories/ProductCategories";
import About from "../../Components/About/About";
import { Link } from "react-router-dom";
import data from "../../data/data.json"

export default function Earphones() {

    const products = data.filter(product => product.category === "earphones");

    return (
        <div>
            <div className="pt-20 lg:pt-0">
                <div className="h-20 md:h-[240px] bg-[var(--custom-black2)] flex items-center justify-center">
                    <h1 className="text-white text-2xl lg:text-3xl font-bold tracking-[5px]">EARPHONES</h1>
                </div>
                <div className="flex flex-col-reverse gap-32 lg:gap-44 px-5 lg:px-0 py-20 lg:py-0 lg:pt-40 lg:pb-10 md:mx-10 lg:mx-40">
                    {products.map((product) => (
                        <div
                            className="flex flex-col gap-5 lg:gap-20 lg:flex-row"
                            key={product.name}
                        >
                            <div className="md:bg-[var(--custom-grey)] md:rounded-lg md:flex md:justify-center lg:flex-none">
                                <picture>
                                    <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                                    <source media="(min-width:640px)" srcSet={product.image.tablet} />
                                    <img
                                        className="rounded-lg md:h-[600px]"
                                        src={product.image.mobile}
                                        alt={product.name}
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col items-center lg:items-baseline justify-center gap-6 md:pt-10 lg:pt-0 md:gap-8 lg:gap-10 text-center lg:text-left lg:w-1/2">
                                {product.new &&
                                    <p className="text-[var(--custom-orange)] tracking-[10px] lg:w-[50%]">NEW PRODUCT</p>
                                }
                                <h2 className="text-3xl md:text-5xl w-[70%] lg:w-[70%] font-semibold tracking-[2px]"
                                >
                                    {product.name.toUpperCase()}
                                </h2>
                                <p className="lg:pr-10 opacity-50 md:px-20 lg:px-0">{product.description}</p>
                                <Link to={`/view/${product.slug}`} state={{ data: product }}>
                                    <button className="primary-btn">
                                        SEE PRODUCT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <ProductCategories />
            </div>
            <About />
        </div>
    )
}
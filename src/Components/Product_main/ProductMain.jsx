import { useState } from "react"
import { useCart } from "../../Hook/useCart"

export default function ProductMain({ product }) {

    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20 justify-center gap-6">
            <picture className="md:w-full">
                <source media="(min-width:1024px)" srcSet={product.image.desktop.replace('./', '/')} />
                <source media="(min-width:640px)" srcSet={product.image.tablet.replace('./', '/')} />
                <img
                    className="rounded-lg md:h-[600px] lg:min-w-[560px]"
                    src={product.image.mobile.replace('./', '/')}
                    alt="product image"
                />
            </picture>
            <div className="flex flex-col md:justify-center gap-5 lg:gap-10">
                {product.new &&
                    <p
                        className="text-[var(--custom-orange)] tracking-[10px] text-[17px] leading-[25px]"
                    >
                        NEW PRODUCT
                    </p>
                }
                <h1
                    className="text-3xl md:text-5xl w-[80%] font-semibold"
                >
                    {product.name}
                </h1>
                <p className="opacity-70 text-[17px] leading-[25px]">{product.description}</p>
                <p className="font-bold text-[17px] leading-[25px]"><data value={product.price}>$ {product.price.toLocaleString('en-US')}</data></p>
                <div className="flex flex-row items-center gap-5">
                    <div className="text-black w-[120px] flex flex-row justify-between px-4 py-3 bg-[var(--custom-grey)]">
                        <button
                            onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)}
                            className="opacity-50 hover:text-[var(--custom-orange2)] hover:opacity-100 cursor-pointer"
                        >
                            -
                        </button>
                        <p>{quantity}</p>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="opacity-50 hover:text-[var(--custom-orange2)] hover:opacity-100 cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => addToCart(product, quantity)}
                        className="primary-btn"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}
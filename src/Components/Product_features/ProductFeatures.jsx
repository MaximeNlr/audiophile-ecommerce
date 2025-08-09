export default function ProductFeatures({ product }) {

    return (
        <div className="pt-20 md:pt-0 lg:py-10 lg:flex lg:flex-row lg:gap-20 md:mt-20">
            <div className="flex flex-col gap-5 lg:w-[60%]">
                <h3 className="text-2xl md:text-4xl font-semibold">FEATURES</h3>
                <p className="opacity-50 lg:w-[90%]">{product.features}</p>
            </div>
            <div className="py-10 md:py-10 lg:py-0 lg:w-[40%]">
                <h4 className="text-2xl md:text-4xl pb-5 font-semibold">IN THE BOX</h4>
                {product.includes.map((about) => (

                    <div
                        key={about.item}
                        className="py-1">
                        <li className="flex flex-row gap-5">
                            <span
                                className="text-[var(--custom-orange)]"
                            >
                                {about.quantity}
                                x
                            </span>
                            <span
                                className="opacity-50"
                            >
                                {about.item}
                            </span>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    )
}
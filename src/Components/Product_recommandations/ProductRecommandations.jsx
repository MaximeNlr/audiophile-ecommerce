import data from "../../data/data.json"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductRecommandations({ others }) {

    const navigate = useNavigate()

    const fetchProduct = (product) => {
        if (!product) {
            return
        }
        const searchedProduct = data.find((item => item.slug === product.slug))
        navigate(`/view/${searchedProduct.slug}`, { state: { data: searchedProduct } })
        window.scrollTo({ top: 0 })

    }

    return (
        <div className="pb-20 md:pb-12 lg:pb-20 mt-16 lg:mt-32">
            <h5 className="text-center text-2xl py-10 font-semibold">YOU MAY ALSO LIKE</h5>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                {others.map((product) => (
                    <div
                        key={product.name}
                        className="flex flex-col items-center gap-5"
                    >
                        <div className="bg-[var(--custom-grey)] ">
                            <div className="w-fit overflow-hidden">
                                <picture>
                                    <source media="(min-width:1024px)" srcSet={product.image.desktop.replace('./', '/')} />
                                    <source media="(min-width:640px)" srcSet={product.image.tablet.replace('./', '/')} />
                                    <motion.img
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true, amount: 0.80 }}
                                        src={product.image.mobile.replace('./', '/')}
                                        className="rounded-lg"
                                        alt="product recommandation"
                                    />
                                </picture>
                            </div>
                        </div>
                        <p className="text-2xl font-bold tracking-[2px]">{product.name.toUpperCase()}</p>
                        <button
                            onClick={() => fetchProduct(product)}
                            className="primary-btn"
                        >
                            SEE PRODUCT
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
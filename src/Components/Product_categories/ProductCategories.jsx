import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function ProductCategories({ setIsActive }) {

    const categoryData = [
        {
            name: "HEADPHONES",
            slug: "headphones",
            image: "/assets/shared/desktop/image-category-thumbnail-headphones.png"
        },
        {
            name: "SPEAKERS",
            slug: "speakers",
            image: "/assets/shared/desktop/image-category-thumbnail-speakers.png"
        },
        {
            name: "EARPHONES",
            slug: "earphones",
            image: "/assets/shared/desktop/image-category-thumbnail-earphones.png"
        }
    ]

    return (
        <div className="flex flex-col gap-20 md:flex-row px-5 md:px-10 lg:px-40 mt-28 md:mt-32 text-black">
            {categoryData.map(({ name, slug, image }) => (
                <div
                    key={slug}
                    className="bg-[var(--custom-grey)] relative rounded-lg h-[200px] md:w-1/3 z-0"
                >
                    <div className="">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.95 }}
                            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[180px] md:w-[220px] "
                            src={image}
                            alt={image}
                        />
                    </div>
                    <div className="relative text-center pt-30 z-10">
                        <p className="font-bold pb-2">{name}</p>
                        <Link
                            onClick={() => setIsActive(false)}
                            to={`/${slug}`}>
                            <div className="flex flex-row justify-center gap-3 items-center hover:text-[var(--custom-orange)] cursor-pointer">
                                <p className="opacity-50">SHOP</p>
                                <img className="h-3" src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                            </div>
                        </Link>

                    </div>
                </div>
            ))}
        </div>
    )
}
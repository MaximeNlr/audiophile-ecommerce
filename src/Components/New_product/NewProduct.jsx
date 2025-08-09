import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json"

export default function NewProduct() {

    const newProduct = data.find(product => product.slug === 'xx99-mark-two-headphones');

    return (
        <div
            className="bg-[var(--custom-black2)] h-[700px] md:h-[800px] lg:h-[calc(100vh-97px)]
                bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg')]
                bg-contain bg-no-repeat bg-center h-[700px] md:h-[800px] lg:bg-none
                flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-white px-4 lg:px-40">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center lg:items-start lg:m-auto gap-5 text-center lg:text-left max-w-[500px] md:max-w-[600px]"
                >
                    <h2 className="mb-4 text-sm md:text-lg tracking-[10px] font-normal opacity-50 uppercase">
                        New Product
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-[2px] mb-6">
                        XX99 Mark II <span className="block">Headphones</span>
                    </h1>
                    <p className="opacity-75 mb-6 text-sm md:text-base lg:pr-32">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Link
                        to="/view/xx99-mark-two-headphones"
                        state={{ data: newProduct }}
                        className="primary-btn"
                    >
                        See Product
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-8 lg:mt-10 hidden lg:flex lg:items-center"
                >
                    <img
                        src="/assets/home/tablet/image-header.jpg"
                        alt="XX99 Mark II Headphones"
                        className="max-w-[300px] md:max-w-[400px] lg:max-w-[750px] object-contain"
                    />
                </motion.div>
            </AnimatePresence>
        </div>

    )
}
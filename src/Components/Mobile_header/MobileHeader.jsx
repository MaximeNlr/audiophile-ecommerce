import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import ProductCategories from "../Product_categories/ProductCategories";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function MobileHeader() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isActive]);

    return (
        <header className="fixed w-full lg:hidden flex flex-row items-center justify-between md:justify-normal md:gap-10 bg-[var(--custom-black2)] text-white h-20 px-7 py-8 border-b-[1px] border-[var(--custom-white)] z-50">
            <div className="text-2xl">
                {!isActive &&
                    <FaBars
                        className="cursor-pointer"
                        onClick={() => setIsActive(true)}
                    />
                }
                {isActive &&
                    <RxCross1
                        className="cursor-pointer"
                        onClick={() => setIsActive(false)}
                    />
                }
            </div>
            <div>
                <Link to="/"><img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" /></Link>
            </div>
            <div className="md:ml-auto">
                <Cart />
            </div>
            {isActive &&
                <>
                    <div className="fixed top-0 left-0 w-full h-full mt-20 bg-black/50 z-30 "></div>
                    <AnimatePresence>
                        {isActive &&
                            <motion.div
                                key={"product-categories"}
                                initial={{ x: -400 }}
                                animate={{ x: 0 }}
                                exit={{ x: -400 }}
                                transition={{ duration: 0.3 }}
                                className="absolute h-[calc(100vh-80px)] md:h-fit top-20 left-0 w-full bg-white z-40 overflow-y-auto py-10 md:py-0 md:pb-12"
                            >
                                <ProductCategories setIsActive={setIsActive} />
                            </motion.div>
                        }
                    </AnimatePresence>
                </>

            }
        </header >
    )
}
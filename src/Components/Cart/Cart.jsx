import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Hook/useCart"
import { useEffect } from "react";



export default function Cart() {

    const { totalQuantity, cart, clearCart, total, updateQuantity, deleteButton } = useCart()

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {

        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isActive]);

    const incrButton = (item, quantity) => {
        updateQuantity(item.product, quantity + 1)
    }
    const decrButton = (items, quantity) => {
        if (quantity === 1) {
            return
        } else {
            updateQuantity(items.product, quantity - 1)
        }
    }

    return (
        <div className="relative">
            {cart.length > 0 &&
                <span className="absolute bg-[var(--custom-orange)] rounded-full px-1 font-semibold bottom-5 left-4 text-xs">{totalQuantity}</span>
            }
            <AiOutlineShoppingCart
                onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}
                className={isActive ? 'cursor-pointer text-2xl text-[var(--custom-orange)] transition-colors' : 'cursor-pointer text-2xl hover:text-[var(--custom-orange)] transition-colors'}
            />
            {isActive &&
                <div className="fixed inset-0 mt-20 lg:mt-[97px] bg-black/50 z-40">
                    <div className="absolute left-5 md:left-auto lg:right-40 md:right-10 top-5 bg-white text-black w-[90%] md:w-[400px] p-6 rounded-lg h-fit shadow-lg z-50 overflow-y-auto">
                        {cart.length === 0 &&
                            <div className="md:h-[300px] flex items-center justify-center">
                                <p className="">Your cart is empty</p>
                            </div>}
                        {cart.length > 0 &&
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-lg font-bold tracking-widest">CART ({totalQuantity})</p>
                                    <button
                                        onClick={() => clearCart()}
                                        className="text-sm opacity-70 cursor-pointer hover:text-[var(--custom-orange2)] transition-colors">Remove all</button>
                                </div>
                                {cart.map((item, index) => (
                                    <div
                                        key={item.product.id || index}
                                        className="flex items-center justify-between mb-6"
                                    >
                                        <picture>
                                            <source media="(min-width:1024px)" srcSet={item.product.image.desktop.replace('./', '/')} />
                                            <source media="(min-width:640px)" srcSet={item.product.image.tablet.replace('./', '/')} />
                                            <img
                                                className="w-[64px] h-[64px] object-cover rounded-md"
                                                src={item.product.image.mobile.replace('./', '/')}
                                                alt={item.product.name}
                                            />
                                        </picture>
                                        <div className="flex-1 ml-4">
                                            <p className="font-bold text-[15px]">{item.product.slug2}</p>
                                            <p className=" text-gray-500 text-[14px]">$ {item.product.price.toLocaleString('en-US')}</p>
                                        </div>
                                        <div className="w-[96px] flex items-center justify-between px-2 py-1 bg-[var(--custom-grey)]">
                                            {item.quantity > 1 ? (
                                                <button
                                                    onClick={() => decrButton(item, item.quantity)}
                                                    className="opacity-50 hover:text-[var(--custom-orange2)] text-sm hover:opacity-100 cursor-pointer"
                                                >
                                                    -
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => deleteButton(item.product)}
                                                    className="opacity-50 hover:text-[var(--custom-orange2)] text-sm hover:opacity-100 cursor-pointer"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            )}
                                            <p className="text-[13px] font-medium">{item.quantity}</p>
                                            <button
                                                onClick={() => incrButton(item, item.quantity)}
                                                className="opacity-50 hover:text-[var(--custom-orange2)] text-sm hover:opacity-100 cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex flex-row justify-between ">
                                    <p className="opacity-50">TOTAL</p>
                                    <p className="font-semibold">$ {total.toLocaleString('en-US')}</p>
                                </div>
                                <Link
                                    to="/checkout"
                                    onClick={() => setIsActive(false)}
                                >
                                    <button
                                        className="bg-[var(--custom-orange)] hover:bg-[var(--custom-orange2)] text-white px-6 py-3 whitespace-nowrap uppercase tracking-wide cursor-pointer transition-colors duration-300 text-sm w-full mt-4"
                                    >
                                        CHECKOUT
                                    </button>
                                </Link>
                            </div>
                        }

                    </div>
                </div>
            }
        </div>
    )
}
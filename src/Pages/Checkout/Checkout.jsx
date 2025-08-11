import BackButton from "../../Components/Back_button/BackButton"
import Form from "../../Components/Checkout_form/Form"
import { useState, useEffect } from "react"
import { useCart } from "../../Hook/useCart"
import { Link } from "react-router-dom"

export default function Checkout() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { cart, total, shipping, vat, grandTotal, clearCart } = useCart()

    useEffect(() => {
        if (isSubmitted) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSubmitted]);

    return (
        <div className="bg-[var(--custom-grey)]">
            <div className="ml-5 md:ml-10 lg:ml-40">
                <BackButton />
            </div>
            <div
                className="lg:flex lg:flex-row lg:relative justify-center px-5 md:px-10 pb-10 lg:px-40 lg:pb-40"
            >
                <div className="lg:w-[70%] lg:min-w-[500px] bg-white px-10 py-5 rounded-lg">
                    <h1 className="text-3xl py-10">CHECKOUT</h1>
                    <Form setIsSubmitted={setIsSubmitted} />
                </div>
                <div className="mt-20 lg:mt-0 mx-5 bg-white px-10 lg:px-8 rounded-lg pb-7 lg:w-[30%] lg:min-w-[300px] lg:h-fit">
                    <h2 className="py-6 font-semibold text-[18px]">SUMMARY</h2>
                    {cart.map((item, index) => (
                        <div
                            key={item.product.id || index}
                            className="flex items-center justify-between mb-6"
                        >
                            <img
                                className="w-[64px] h-[64px] object-cover rounded-md"
                                src={item.product.image.desktop}
                                alt={item.product.name}
                            />
                            <div className="flex-1 ml-4">
                                <p className="text-sm font-bold">{item.product.slug2}</p>
                                <p className="text-sm text-gray-500">$ {item.product.price.toLocaleString('en-US')}</p>
                            </div>
                            <p className="text-sm font-medium opacity-50">x {item.quantity}</p>
                        </div>
                    ))}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between ">
                            <p className="opacity-50">TOTAL</p>
                            <p className="font-semibold">$ {total.toLocaleString('en-US')}</p>
                        </div>
                        <div className="flex flex-row justify-between ">
                            <p className="opacity-50">SHIPPING</p>
                            <p className="font-semibold">$ {shipping}</p>
                        </div>
                        <div className="flex flex-row justify-between ">
                            <p className="opacity-50">VAT (INCLUDED)</p>
                            <p className="font-semibold">$ {vat.toLocaleString('en-US')}</p>
                        </div>
                        <div className="flex flex-row justify-between py-5">
                            <p className="opacity-50">GRAND TOTAL</p>
                            <p className="text-[var(--custom-orange)] font-semibold">$ {grandTotal.toLocaleString('en-US')}</p>
                        </div>
                    </div>
                    <button
                        form="checkout-form"
                        type="submit"
                        className="bg-[var(--custom-orange)] hover:bg-[var(--custom-orange2)] text-white w-full px-6 py-3
                            whitespace-nowrap uppercase tracking-wide cursor-pointer transition-colors duration-300"
                    >
                        CONTINUE & PAY
                    </button>
                </div>
                {isSubmitted &&
                    <div className="fixed inset-0 bg-black/50 z-40">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 md:gap-0 md:justify-between bg-white text-black w-[90%]
                                max-h-[70vh] md:w-[540px] md:h-[581px] px-10 py-5 md:py-10 rounded-lg shadow-lg z-50 overflow-y-auto">
                            <div className="h-16 w-16 bg-[var(--custom-orange)] rounded-full">
                                <img src="./assets/checkout/icon-order-confirmation.svg" alt="" />
                            </div>
                            <h2 className="text-2xl md:text-3xl flex flex-col">THANK YOU <span>FOR YOUR ORDER</span></h2>
                            <p className="opacity-50">You will receive an email confirmation shortly.</p>
                            <div className="flex flex-col md:flex-row w-full rounded-lg">
                                <div className="flex flex-col justify-center gap-3 py-5 md:py-0 px-5 bg-[var(--custom-grey)] w-full">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-1">
                                            <img
                                                className="w-[50px] h-[50px]"
                                                src={cart[0].product.image.mobile}
                                                alt=""
                                            />
                                            <div className="flex-flex-row">
                                                <p className="font-semibold text-[15px]">{cart[0].product.slug2}</p>
                                                <p className="opacity-50">$ {cart[0].product.price}</p>
                                            </div>
                                        </div>
                                        <p className="opacity-50">x {cart[0].quantity}</p>
                                    </div>
                                    <div className="h-[1px] w-[90%] bg-black/50"></div>
                                    <p className="opacity-50 text-center">and 2 other item(s)</p>
                                </div>
                                <div className="flex flex-col py-5 px-5 md:py-0 md:px-10 gap-3 justify-center bg-[var(--custom-black)] text-white w-full">
                                    <p className="opacity-50 text-[18px]">GRAND TOTAL</p>
                                    <p className="font-semibold">$ {grandTotal}</p>
                                </div>
                            </div>
                            <Link
                                to="/"
                                onClick={() => clearCart()}
                                className="text-center text-[13px] bg-[var(--custom-orange)] hover:bg-[var(--custom-orange2)] text-white w-full px-6 py-3
                                    whitespace-nowrap uppercase tracking-wide cursor-pointer transition-colors duration-300"
                            >
                                BACK TO HOME
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
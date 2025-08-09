import { useState } from "react"

export default function Form({ setIsSubmitted }) {

    const [eMoneyIsActive, setEMoneyIsActive] = useState(false)
    const [isCash, setIsCash] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        zip: "",
        country: "",
        payment: "",
        eNumber: "",
        pin: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmptyField = Object.values(formData).some((value) => value.trim() === "")
        console.log(isEmptyField);


        if (isEmptyField) {
            alert("Veuillez remplir tous les champs !")
            return
        } else {
            setIsSubmitted(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} action="#" method="post" id="checkout-form" className="space-y-10">
            <fieldset className="space-y-6">
                <legend className="text-[var(--custom-orange)] text-sm font-semibold tracking-widest">BILLING DETAILS</legend>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold text-sm">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            autoComplete="name"
                            className="input-style"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold text-sm">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            autoComplete="email"
                            className="input-style"
                        />
                    </div>
                    <div className="flex flex-col gap-1 md:col-span-2 md:w-1/2 md:pr-3">
                        <label htmlFor="phone" className="font-semibold text-sm">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            autoComplete="tel"
                            className="input-style"
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className="space-y-6">
                <legend className="text-[var(--custom-orange)] text-sm font-semibold tracking-widest">SHIPPING INFO</legend>
                <div className="flex flex-col gap-1">
                    <label htmlFor="address" className="font-semibold text-sm">Your Address</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        onChange={(e) => setFormData({ ...formData, adress: e.target.value })}
                        required
                        autoComplete="street-address"
                        className="input-style"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="zip" className="font-semibold text-sm">ZIP Code</label>
                        <input
                            id="zip"
                            name="zip"
                            type="text"
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            required
                            autoComplete="postal-code"
                            className="input-style"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="city" className="font-semibold text-sm">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            required
                            autoComplete="address-level2"
                            className="input-style"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 md:w-1/2 md:pr-3">
                    <label htmlFor="country" className="font-semibold text-sm">Country</label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                        autoComplete="country"
                        className="input-style"
                    />
                </div>
            </fieldset>
            <fieldset className="space-y-6">
                <legend className="text-[var(--custom-orange)] font-semibold tracking-widest">PAYMENT DETAILS</legend>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold text-sm ">Payment Method</span>
                    <div className="flex flex-col items-end gap-3">
                        <label
                            onClick={() => setEMoneyIsActive(true)}
                            className={eMoneyIsActive ? 'flex items-center gap-3 border-2 border-[var(--custom-orange)] w-full md:w-1/2 rounded-lg px-5 py-4 cursor-pointer' :
                                'flex items-center gap-3 border-2 border-gray-300  w-full md:w-1/2 rounded-lg px-5 py-4 cursor-pointer'}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="eMoney"
                                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                                className="accent-[var(--custom-orange)]"
                            />
                            <span className="text-sm">e-Money</span>
                        </label>
                        <label
                            onClick={() => setEMoneyIsActive(false)}
                            className={eMoneyIsActive ? 'flex items-center gap-3 border-2 border-gray-300  w-full md:w-1/2 rounded-lg px-5 py-4 cursor-pointer' :
                                'flex items-center gap-3 border-2 border-[var(--custom-orange)] w-full md:w-1/2 rounded-lg px-5 py-4 cursor-pointer'}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                                className="accent-[var(--custom-orange)]"
                            />
                            <span className="text-sm">Cash on Delivery</span>
                        </label>
                        {eMoneyIsActive &&
                            <div className="flex flex-col md:flex-row w-full gap-5 py-5">
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="country" className="font-semibold text-sm">e-Money Number</label>
                                    <input
                                        id="emoney"
                                        name="emoney"
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, eNumber: e.target.value })}
                                        autoComplete="emoney"
                                        className="input-style w-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="country" className="font-semibold text-sm">e-Money PIN</label>
                                    <input
                                        id="pin"
                                        name="pin"
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                                        autoComplete="pin"
                                        className="input-style w-full"
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </fieldset>
        </form>
    )
}
export default function About() {
    return (
        <div className="flex flex-col lg:flex-row-reverse gap-10 mx-5 md:mx-10 lg:mx-40 my-32">
            <img
                className="rounded-lg"
                src="/assets/shared/mobile/image-best-gear.jpg"
                alt=""
            />
            <div className="flex flex-col justify-center items-center md:px-10 lg:px-0 lg:items-baseline gap-10 text-center lg:text-left">
                <h2
                    className="text-3xl md:text-5xl tracking-[2px] font-semibold w-[89%] md:w-[80%] text-center lg:text-left"
                >
                    BRINGING YOU THE <span className="text-[var(--custom-orange)]">BEST</span> AUDIO GEAR
                </h2>
                <p className="opacity-50 lg:pr-20">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet some
                    of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    )
}
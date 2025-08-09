export default function ProductGallery({ product }) {

    return (
        <div className="flex flex-col gap-5 md:flex-row md:h-[600px] md:mt-20">
            <div className="flex flex-col gap-5 md:h-[600px] md:w-[40%]">
                <picture className="flex-1">
                    <source media="(min-width:1024px)" srcSet={product.gallery.first.desktop.replace('./', '/')} />
                    <source media="(min-width:640px)" srcSet={product.gallery.first.tablet.replace('./', '/')} />
                    <img
                        className="rounded-lg md:h-full md:object-cover"
                        src={product.gallery.first.mobile.replace('./', '/')}
                        alt="image first"
                    />
                </picture>
                <picture className="flex-1">
                    <source media="(min-width:1024px)" srcSet={product.gallery.second.desktop.replace('./', '/')} />
                    <source media="(min-width:640px)" srcSet={product.gallery.second.tablet.replace('./', '/')} />
                    <img
                        className="rounded-lg md:h-full md:object-cover"
                        src={product.gallery.second.mobile.replace('./', '/')}
                        alt="image second"
                    />
                </picture>
            </div>
            <picture className="md:h-[600px] md:w-[60%]">
                <source media="(min-width:1024px)" srcSet={product.gallery.third.desktop.replace('./', '/')} />
                <source media="(min-width:640px)" srcSet={product.gallery.third.tablet.replace('./', '/')} />
                <img
                    className="rounded-lg md:w-full md:h-full md:object-cover"
                    src={product.gallery.third.mobile.replace('./', '/')}
                    alt="image third"
                />
            </picture>
        </div>
    )
}
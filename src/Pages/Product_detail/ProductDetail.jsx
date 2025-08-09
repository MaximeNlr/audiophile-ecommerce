import ProductCategories from "../../Components/Product_categories/ProductCategories";
import About from "../../Components/About/About";
import ProductMain from "../../Components/Product_main/ProductMain";
import ProductGallery from "../../Components/Product_gallery/ProductGallery";
import ProductFeatures from "../../Components/Product_features/ProductFeatures";
import ProductRecommandations from "../../Components/Product_recommandations/ProductRecommandations";
import BackButton from "../../Components/Back_button/BackButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useEffect } from "react";

export default function ProductDetail() {

    const location = useLocation();
    const { pathname } = useLocation();
    const data = location.state?.data;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div>
            <div className="px-5 md:px-10 lg:px-40">
                <BackButton />
                <ProductMain product={data} />
                <ProductFeatures product={data} />
                <ProductGallery product={data} />
                <ProductRecommandations others={data.others} />
            </div>
            <ProductCategories />
            <About />
        </div>
    )
}
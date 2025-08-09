import ScrollToTop from "../Components/Scroll_to_top/ScrollToTop";
import { Outlet } from "react-router-dom";
import CartProvider from "../Hook/useCart";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Mobile_header/MobileHeader";
import Footer from "../Components/Footer/Footer";
import TabletFooter from "../Components/Tablet_footer/TabletFooter";


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <CartProvider>
                <Header />
                <MobileHeader />
                <main className="flex-grow">
                    <ScrollToTop />
                    <Outlet />
                </main>
                <Footer />
                <TabletFooter />
            </CartProvider>
        </div>
    );
}
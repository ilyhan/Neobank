import { Outlet } from "react-router-dom";
import "@/modules/mainPage/style.scss";
import Header from "@/common/components/header/Header";
import Footer from "@/common/components/footer/Footer";

const MainPage = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default MainPage;
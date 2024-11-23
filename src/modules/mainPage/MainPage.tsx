import { Outlet } from "react-router-dom";
import "@/modules/mainPage/style.scss";
import Header from "@/common/components/header/Header";

const MainPage = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <div>Footer</div>
        </div>
    )
};

export default MainPage;
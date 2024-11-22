import { Outlet } from "react-router-dom";
import "@/modules/mainPage/style.scss";

const MainPage = () => {
    return (
        <div className="container">
            <div>Header</div>
            <Outlet />
            <div>Footer</div>
        </div>
    )
};

export default MainPage;
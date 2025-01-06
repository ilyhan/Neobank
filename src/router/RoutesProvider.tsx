import Home from "@/modules/home/Home";
import Loan from "@/modules/loan/Loan";
import MainPage from "@/modules/mainPage/MainPage";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainPage />}>
                    <Route path="home" element={<Home />} />
                    <Route path="credit-card" element={<Loan />} />
                </Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
            </>
        )
    );

    return (
        <RouterProvider router={provider} />
    );
}

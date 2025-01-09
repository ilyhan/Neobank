import Home from "@/modules/home/Home";
import Loan from "@/modules/loan/Loan";
import MainPage from "@/modules/mainPage/MainPage";
import NotFoundPage from "@/modules/notFoundPage/NotFoundPage";
import ScoringPage from "@/modules/scoring/ScoringPage";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainPage />}>
                    <Route path="home" element={<Home />} />
                    <Route path="credit-card" element={<Loan />} />
                    <Route path="loan/:applicationId" element={<ScoringPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </>
        )
    );

    return (
        <RouterProvider router={provider} />
    );
}

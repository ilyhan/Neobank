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
                    <Route path="home" element={<div>Home</div>}/>
                </Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
            </>
        )
    );

    return (
        <RouterProvider router={provider} />
    );
}
import Button from "@/common/ui/button/Button";
import error from "/public/images/error.png";
import "@/common/components/notFound/style.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/home');
    };

    return (
        <section className="not-found">
            <div className="not-found__content">
                <h2 className="not-found__title">
                    Oops....
                </h2>

                <h3 className="not-found__subtitle">
                    Page not found
                </h3>

                <p className="not-found__description">
                    This Page doesn`t exist or was removed! We suggest you go back.
                </p>

                <Button classes="not-found__button" onClick={handleClickBack}>
                    Go back
                </Button>
            </div>

            <img className="not-found__image" src={error} alt="error image" />
        </section>
    )
};

export default NotFound;
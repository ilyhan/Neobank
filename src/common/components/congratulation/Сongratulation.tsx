import Button from "@/common/ui/button/Button";
import surprise from "/public/images/surprise.png";
import "@/common/components/congratulation/style.scss";
import { useNavigate } from "react-router-dom";

const Сongratulation = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <section className="congratulation">
            <img className="congratulation__image" src={surprise} height={150} alt="surprise image" />

            <h2 className="congratulation__title">
                Congratulations! You have completed your new credit card.
            </h2>

            <p className="congratulation__description">
                Your credit card will arrive soon. Thank you for choosing us!
            </p>

            <Button classes="congratulation__button" onClick={handleClick}>
                View other offers of our bank
            </Button>
        </section>
    )
};

export default Сongratulation;
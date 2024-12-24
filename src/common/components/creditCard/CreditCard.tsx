import Button from "@/common/ui/button/Button";
import card from "/public/images/cardsDesign/cardDesign1.png";
import "@/common/components/creditCard/style.scss";
import DetailsList from "@/common/components/creditCard/DetailsList";
import { RefObject } from "react";

interface ICreditCardProps {
    formRef?: RefObject<HTMLElement>;
};

const CreditCard = ({ formRef }: ICreditCardProps) => {
    const handleClick = () => {
        if (formRef?.current) {
            formRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="credit-card">
            <div className="credit-card__content">
                <h2 className="credit-card__title">
                    Platinum digital credit card
                </h2>

                <p className="credit-card__description">
                    Our best credit card. Suitable for everyday spending and shopping.
                    Cash withdrawals and transfers without commission and interest.
                </p>

                <img src={card} className="credit-card__image credit-card__image_hidden" alt="Credit card" />

                <DetailsList />

                <Button onClick={handleClick} classes="credit-card__button">
                    Apply for card
                </Button>
            </div>

            <img src={card} className="credit-card__image credit-card__image_show" alt="Credit card" />
        </section>
    )
};

export default CreditCard;
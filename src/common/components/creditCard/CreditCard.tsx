import Button from "@/common/ui/button/Button";
import card from "/public/images/cardsDesign/cardDesign1.png";
import "@/common/components/creditCard/style.scss";
import DetailsList from "@/common/components/creditCard/DetailsList";
import { ReactNode, RefObject } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { EApplicationStep } from "@/common/enums/application";

interface ICreditCardProps {
    formRef?: RefObject<HTMLElement>;
};

const CreditCard = ({ formRef }: ICreditCardProps) => {
    const step = useSelector((state: RootState) => state.applicationReducer.step);

    const setTextButton = (): ReactNode => {
        switch (step) {
            case EApplicationStep.OFFERS:
                return <span>{"Choose an offer"}</span>;
            case EApplicationStep.SCORING:
                return <span style={{ paddingInline: '16px' }}>
                    {"Continue"}<br /> {"registration"}
                </span>;
            default:
                return <span>{"Apply for card"}</span>;
        }
    };

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
                    {setTextButton()}
                </Button>
            </div>

            <img src={card} className="credit-card__image credit-card__image_show" alt="Credit card" />
        </section>
    )
};

export default CreditCard;
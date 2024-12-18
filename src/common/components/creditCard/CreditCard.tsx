import Button from "@/common/ui/button/Button";
import card from "/public/images/cardsDesign/cardDesign1.png";
import "@/common/components/creditCard/style.scss";
import DetailsList from "@/common/components/creditCard/DetailsList";

const CreditCard = () => {
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

                <Button classes="credit-card__button">
                    Apply for card
                </Button>
            </div>

            <img src={card} className="credit-card__image credit-card__image_show" alt="Credit card" />
        </section>
    )
};

export default CreditCard;
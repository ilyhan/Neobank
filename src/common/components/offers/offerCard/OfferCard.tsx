import { IOffer } from "@/common/interfaces/form";
import surprise from "/public/images/surprise.png";
import Button from "@/common/ui/button/Button";
import "@/common/components/offers/offerCard/style.scss";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { usePostAppApply } from "@/api/hookApi";
import { useEffect } from "react";
import { useActions } from "@/store/actions";

interface IOfferCardProps {
    card: IOffer;
};

const OfferCard = ({ card }: IOfferCardProps) => {
    const { mutate, isSuccess } = usePostAppApply();

    const { setStepScoring } = useActions();

    const handleChoseOffer = () => {
        mutate(card);
    };

    useEffect(() => {
        if (isSuccess) {
            setStepScoring();
        }
    }, [isSuccess]);

    return (
        <article className="offer-card">
            <img className="offer-card__image" src={surprise} alt="surpise image" height="150" />

            <p className="offer-card__paragraph">Requested amount: {card.requestedAmount} ₽</p>
            <p className="offer-card__paragraph">Total amount: {card.totalAmount} ₽</p>
            <p className="offer-card__paragraph">For {card.term} months</p>
            <p className="offer-card__paragraph">Monthly payment: {card.monthlyPayment} ₽</p>
            <p className="offer-card__paragraph">Your rate: {Math.round(card.rate * 100)}%</p>
            <p className="offer-card__paragraph offer-card__paragraph_flex">
                Insurance included
                <SvgHelper iconName={card.insuranceEnabled ? "success_input" : "error"} width={24} height={24} />
            </p>
            <p className="offer-card__paragraph offer-card__paragraph_flex">
                Salary client
                <SvgHelper iconName={card.salaryClient ? "success_input" : "error"} width={24} height={24} />
            </p>

            <Button classes="offer-card__button" onClick={handleChoseOffer}>
                Select
            </Button>
        </article>
    )
};

export default OfferCard;
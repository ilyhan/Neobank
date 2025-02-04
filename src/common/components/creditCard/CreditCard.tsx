import Button from "@/common/ui/button/Button";
import card from "/public/images/cardsDesign/cardDesign1.png";
import "@/common/components/creditCard/style.scss";
import DetailsList from "@/common/components/creditCard/DetailsList";
import { ReactNode, RefObject } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { EApplicationStatus, EApplicationStep } from "@/common/enums/application";
import { useNavigate } from "react-router-dom";

interface ICreditCardProps {
    formRef?: RefObject<HTMLElement>;
};

const CreditCard = ({ formRef }: ICreditCardProps) => {
    const application = useSelector((state: RootState) => state.applicationReducer);
    const navigate = useNavigate();

    const setTextButton = (): ReactNode => {
        switch (application.step) {
            case EApplicationStep.PRESCORING:
                return <span>{"Apply for card"}</span>;
            case EApplicationStatus.PREAPPROVAL:
                return <span>{"Choose an offer"}</span>;
            case EApplicationStatus.APPROVED:
                return <span style={{ paddingInline: '16px' }}>
                    {"Continue"}<br /> {"registration"}
                </span>;
            default:
                return <span style={{ paddingInline: '16px' }}>
                    {"Continue"}<br /> {"registration"}
                </span>;
        }
    };

    const handleClick = () => {
        switch (application.step) {
            case EApplicationStatus.PREAPPROVAL:
            case EApplicationStep.PRESCORING:
                if (formRef?.current) {
                    formRef.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                break;
            case EApplicationStatus.APPROVED:
                navigate(`/loan/${application.statementId}`);
                break;
            case EApplicationStatus.CC_APPROVED:
                navigate(`/loan/${application.statementId}/document`);
                break;
            case EApplicationStatus.DOCUMENT_CREATED:
                navigate(`/loan/${application.statementId}/document/sign`);
                break;
            case EApplicationStep.CODE:
                navigate(`/loan/${application.statementId}/code`);
                break;
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
import { rulesReceive, rulesUsingCard } from "@/common/arrays/accordion";
import "@/common/components/faq/style.scss";
import FaqAccordion from "@/common/components/faq/FaqAccordion";

const Faq = () => {
    return (
        <div className="faq">
            <div className="faq__wrapper">
                <h2 className="faq__title">Issuing and receiving a card</h2>

                <FaqAccordion array={rulesReceive} name="recieve" />
            </div>

            <div className="faq__wrapper">
                <h2 className="faq__title">Using a credit card</h2>

                <FaqAccordion array={rulesUsingCard} name="usingCard" />
            </div>
        </div>
    )
};

export default Faq;
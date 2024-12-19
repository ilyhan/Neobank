import { rulesReceive, rulesUsingCard } from "@/common/arrays/accordion";
import RenderList from "@/common/helper/RenderList";
import { IAccordion } from "@/common/interfaces/accordion";
import Accordion from "@/common/ui/accordion/Accordion";
import "@/common/components/faq/style.scss";

const Faq = () => {
    return (
        <section className="faq">
            <div className="faq__wrapper">
                <h2 className="faq__title">Issuing and receiving a card</h2>

                <RenderList
                    items={rulesReceive}
                    renderItem={(item: IAccordion, index) => (
                        <li key={index} className="faq__item">
                            <Accordion
                                summary={item.summary}
                                text={item.text}
                                name="receive"
                            />
                        </li>
                    )}
                />
            </div>

            <div className="faq__wrapper">
                <h2 className="faq__title">Using a credit card</h2>

                <RenderList
                    items={rulesUsingCard}
                    renderItem={(item: IAccordion, index) => (
                        <li key={index} className="faq__item">
                            <Accordion
                                summary={item.summary}
                                text={item.text}
                                name="usingCard"
                            />
                        </li>
                    )}
                />
            </div>
        </section>
    )
};

export default Faq;
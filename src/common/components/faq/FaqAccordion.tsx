import RenderList from "@/common/helper/RenderList";
import { IAccordion } from "@/common/interfaces/accordion";
import Accordion from "@/common/ui/accordion/Accordion";

interface IFaqAccordionProps {
    name: string;
    array: IAccordion[];
};

const FaqAccordion = ({ name, array }: IFaqAccordionProps) => {
    return (
        <RenderList
            items={array}
            renderItem={(item: IAccordion, index) => (
                <li key={index} className="faq__item">
                    <Accordion
                        summary={item.summary}
                        text={item.text}
                        name={name}
                    />
                </li>
            )}
        />
    )
};

export default FaqAccordion;
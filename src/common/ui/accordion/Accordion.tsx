import SvgHelper from "@/common/svg-helper/SvgHelper";
import "@/common/ui/accordion/style.scss";

interface IAccordionProps {
    summary: string;
    text: string;
    name?: string;
    detailsClass?: string;
    summaryClass?: string;
    textClass?: string;
};

const Accordion = ({ summary, text, name, detailsClass = '', summaryClass = '', textClass = '' }: IAccordionProps) => {
    return (
        <details name={name} className={"accordion " + detailsClass}>
            <summary className={"accordion__summary " + summaryClass}>
                {summary}
                <SvgHelper iconName="arrow_up" className="accordion__icon"/>
            </summary>

            <p className={"accordion__text" + textClass}>{text}</p>
        </details>
    )
};

export default Accordion;
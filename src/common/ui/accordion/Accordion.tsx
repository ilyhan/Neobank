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
        <div className="accordion">
            <details name={name} className={"accordion__details " + detailsClass}>
                <summary className={"accordion__summary " + summaryClass}>
                    {summary}
                    <SvgHelper iconName="arrow_up" className="accordion__icon" />
                </summary>
            </details>
            
            <div className="accordion__content" role="definition">
                <p className={"accordion__content-body" + textClass}>{text}</p>
            </div>
        </div>
    )
};

export default Accordion;
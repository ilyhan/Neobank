import "@/common/ui/tooltip/style.scss";

interface ITooltipProps {
    children: React.ReactNode;
    content: string;
};

const Tooltip = ({ children, content }: ITooltipProps) => {
    return (
        <div className="tooltip">
            <div className="tooltip__title" aria-describedby="tooltip">
                {children}
            </div>
            <div className="tooltip__content" role="tooltip">
                {content}
            </div>
        </div>
    )
};

export default Tooltip;
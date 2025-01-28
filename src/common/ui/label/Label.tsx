import "@/common/ui/label/style.scss";

interface ILabelProps {
    content: string;
    name?: string;
    isRequired?: boolean;
};

const Label = ({ content, name, isRequired = true }: ILabelProps) => {
    return (
        <label className="label" htmlFor={name}>
            {content}
            {isRequired && <span className="label__required"> *</span>}
        </label>
    )
};

export default Label;
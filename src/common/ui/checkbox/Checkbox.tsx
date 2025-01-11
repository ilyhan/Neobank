import "@/common/ui/checkbox/style.scss";

interface ICheckboxProps {
    name: string;
    label?: string;
    isRequired?: boolean;
};

const Checkbox = ({ name, label = '', isRequired = false }: ICheckboxProps) => {
    return (
        <div className="checkbox__wrapper">
            <label htmlFor={name}>
                <input type="checkbox" id={name} className="checkbox" required={isRequired}/>
                <span className="checkbox__icon">
                    <svg width="9px" height="9px" viewBox="0 0 12 12" >
                        <polyline points="1 6.29411765 4.5 10 11 1" ></polyline>
                    </svg>
                </span>
                <span className="checkbox__label-text">{label}</span>
            </label>
        </div>
    )
};

export default Checkbox;


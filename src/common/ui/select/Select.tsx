import SvgHelper from "@/common/svg-helper/SvgHelper";
import Label from "@/common/ui/label/Label";
import { SelectHTMLAttributes } from "react";
import "@/common/ui/input/style.scss";
import { IOption } from "@/common/interfaces/form";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    errorText?: string;
    isError?: boolean;
    isRequired?: boolean;
    containerClass?: string;
    options?: IOption[];
};

const Select = ({ label, errorText, isError, isRequired = true, containerClass = "", options, ...props }: ISelectProps) => {
    return (
        <div className={`input__container ${containerClass}`}>
            {label && <Label
                name={props.name}
                content={label}
                isRequired={isRequired} />
            }

            <div className="input__wrapper">
                <select {...props} className={`input ${props.className} ${isError ? " input_error" : ""}`} >
                    {options?.map((item) => (
                        <option key={item.value} value={item.value}>{item.title}</option>
                    ))}
                </select>

                {isError != undefined &&
                    <SvgHelper className="input__icon" iconName={isError ? 'error' : 'success_input'} />
                }
            </div>

            {isError && errorText && <p className="input__error-message">{errorText}</p>}
        </div>
    )
};

export default Select;
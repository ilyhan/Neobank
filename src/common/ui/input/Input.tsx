import SvgHelper from "@/common/svg-helper/SvgHelper";
import Label from "@/common/ui/label/Label";
import { InputHTMLAttributes } from "react";
import "@/common/ui/input/style.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorText?: string;
    isError?: boolean;
    isRequired?: boolean;
    containerClass?: string;
};

const Input = ({ label, errorText, isError, isRequired = true, containerClass = "", ...props }: IInputProps) => {
    return (
        <div className={`input__container ${containerClass}`}>
            {label && <Label
                name={props.name}
                content={label}
                isRequired={isRequired} />
            }

            <div className="input__wrapper">
                <input {...props} className={`input ${props.className} ${isError ? " input_error" : ""}`} />

                {isError != undefined &&
                    <SvgHelper className="input__icon" iconName={isError ? 'error' : 'success_input'} />
                }
            </div>

            {isError && errorText && <p className="input__error-message">{errorText}</p>}
        </div>
    )
};

export default Input;
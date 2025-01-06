import SvgHelper from "@/common/svg-helper/SvgHelper";
import Label from "@/common/ui/label/Label";
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import "@/common/ui/input/style.scss";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
    dirty?: boolean;
    isRequired?: boolean;
    containerClass?: string;
};

const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({
        label,
        error,
        dirty,
        isRequired = true,
        containerClass = "",
        ...props
    }: IInputProps, ref: Ref<HTMLInputElement>) => {

        return (
            <div className={`input__container ${containerClass}`}>
                {label && <Label
                    name={props.name}
                    content={label}
                    isRequired={isRequired} />
                }

                <div className="input__wrapper">
                    <input
                        ref={ref}
                        {...props}
                        className={`input ${props.className ? props.className : ""} ${error ? " input_error" : ""}`}
                    />

                    {dirty && !error &&
                        <SvgHelper className="input__icon" iconName='success_input' />
                    }
                    {error &&
                        <SvgHelper className="input__icon" iconName='error' />
                    }
                </div>

                {error && <p className="input__error-message">{error.message}</p>}
            </div>
        )
    }
);

export default Input;
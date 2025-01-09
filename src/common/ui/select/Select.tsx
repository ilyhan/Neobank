import Label from "@/common/ui/label/Label";
import { Ref, SelectHTMLAttributes, forwardRef } from "react";
import "@/common/ui/input/style.scss";
import { IOption } from "@/common/interfaces/form";
import { FieldError } from "react-hook-form";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: FieldError;
    isRequired?: boolean;
    containerClass?: string;
    options?: IOption[];
    withEmptyPlacholder?: boolean;
};

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
    ({
        label,
        error,
        isRequired = true,
        containerClass = "",
        options,
        withEmptyPlacholder = false,
        ...props
    }: ISelectProps, ref: Ref<HTMLSelectElement>) => {

        return (
            <div className={`input__container ${containerClass}`}>
                {label && <Label
                    name={props.name}
                    content={label}
                    isRequired={isRequired} />
                }

                <div className="input__wrapper">
                    <select
                        ref={ref}
                        {...props}
                        className={`input ${props.className ? props.className : ""} ${error ? " input_error" : ""}`}
                        defaultValue={withEmptyPlacholder ? "" : undefined} 
                    >
                        {withEmptyPlacholder && <option value="" hidden disabled></option>}
                        {options?.map((item) => (
                            <option key={item.value} value={item.value}>{item.title}</option>
                        ))}
                    </select>
                </div>

                {error && <p className="input__error-message">{error.message}</p>}
            </div>
        )
    }
);

export default Select;
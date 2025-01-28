import { numPattern } from "@/common/helper/validationPatterns";
import "@/common/ui/verificationInput/style.scss";
import { KeyboardEvent, useRef, useState } from "react";

interface IVerificationInputProps {
    length: number;
    onSuccess: (code: string) => void;
    isError?: boolean;
    errorMessage?: string;
};

const VerificationInput = ({
    length,
    onSuccess,
    isError = false,
    errorMessage = 'Invalid confirmation code'
}: IVerificationInputProps) => {

    const [inputCode, setInputCode] = useState<string[]>(Array(length).fill(""));
    const inputs = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (index: number, value: string) => {
        value = value.slice(0, 1);

        if (!numPattern.test(value)) {
            value = '';
        }

        const newCode = [...inputCode];
        newCode[index] = value
        setInputCode([...newCode]);

        if (newCode.join("").length == length) {
            onSuccess(newCode.join(""));
        }
        else if (value.length) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code == 'Backspace' && index > 0) {
            const newCode = [...inputCode];

            if (!newCode[index].length) {
                inputs.current[index - 1]?.focus();
                index--;
            }

            newCode[index] = '';
            setInputCode([...newCode]);
        }
    };

    return (
        <div className="verification-input__container">
            <div className="verification-input__wrapper">
                {inputCode.map((item, index) => (
                    <input
                        key={index}
                        className={`verification-input ${inputCode[index].length ? 'verification-input_has-data' : ''}`}
                        placeholder=""
                        onChange={(e) => handleChange(index, e.target.value)}
                        ref={(ref) => inputs.current[index] = ref}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        autoFocus={index == 0}
                        value={item}
                        autoComplete="one-time-code"
                    />
                ))}
                {isError && <p className="verification-input__error">{errorMessage}</p>}
            </div>
        </div>
    )
};

export default VerificationInput;
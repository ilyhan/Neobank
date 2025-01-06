import { formatAmount } from "@/common/helper/formatAmount";
import { IPrescoring } from "@/common/interfaces/form";
import Divider from "@/common/ui/divider/Divider";
import Input from "@/common/ui/input/Input";
import { ChangeEvent, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IPrescoringHeaderProps {
    register: UseFormRegister<IPrescoring>;
    error?: FieldError;
    dirty?: boolean;
};

const PrescoringHeader = ({ register, error, dirty }: IPrescoringHeaderProps) => {
    const [value, setValue] = useState('0');

    const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="prescoring__header">
            <div>
                <div className="prescoring__title-wrapper">
                    <h2 className="prescoring__title">Customize your card</h2>
                    <p className="prescoring__step">Step 1 of 5</p>
                </div>

                <Input
                    {...register("amount", {
                        required: { value: true, message: "Enter amount" },
                        min: {
                            value: 15000,
                            message: "Incorrect amount"
                        },
                        max: {
                            value: 600000,
                            message: "Incorrect amount"
                        },
                        onChange: handleSetValue,
                    })}
                    error={error}
                    dirty={dirty}
                    name="amount"
                    type="number"
                    placeholder="Select amount"
                    label="Select amount"
                />
            </div>

            <Divider position="vertical" style="dashed" classes="prescoring__divider" />

            <div>
                <h3 className="prescoring__subtitle">You have chosen the amount</h3>
                <p className="prescoring__amount">{formatAmount(value) + " ₽"}</p>
            </div>
        </div>
    )
};

export default PrescoringHeader;
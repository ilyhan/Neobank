import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input"
import "@/common/components/form/prescoring/style.scss";
import Divider from "@/common/ui/divider/Divider";
import { ChangeEvent, useState } from "react";
import Select from "@/common/ui/select/Select";

const Prescoring = () => {
    const [value, setValue] = useState(0);

    const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value));
    };

    return (
        <form className="prescoring">
            <div className="prescoring__header">
                <div>
                    <div className="prescoring__title-wrapper">
                        <h2 className="prescoring__title">Customize your card</h2>
                        <p className="prescoring__step">Step 1 of 5</p>
                    </div>

                    <Input
                        label="Select amount"
                        onChange={handleSetValue}
                        value={value}
                        max={5}
                        required
                    />
                </div>

                <Divider position="vertical" style="dashed" classes="prescoring__divider"/>

                <div>
                    <h3 className="prescoring__subtitle">You have chosen the amount</h3>
                    <p className="prescoring__amount">{value + " ₽"}</p>
                </div>
            </div>

            <h3 className="prescoring__subtitle">Contact Information</h3>

            <div className="prescoring__inputs-wrapper">
                <Input
                    label="Your last name"
                    placeholder="For Example Doe"
                    name="name"
                    containerClass="prescoring__input"
                    required
                />

                <Input
                    label="Your first name"
                    placeholder="For Example Jhon"
                    name="surname"
                    containerClass="prescoring__input"
                    required
                />

                <Input
                    label="Your patronymic"
                    placeholder="For Example Victorovich"
                    name="patrontmic"
                    containerClass="prescoring__input"
                    isRequired={false}
                />

                <Select
                    label="Select term"
                    name="range"
                    containerClass="prescoring__input"
                    options={[{title: "6 month", value:"sds"}, {title: "12 month", value:"sds"}, {title: "18 month", value:"sds"}]}
                    required
                />

                <Input
                    label="Your email"
                    placeholder="test@gmail.com"
                    name="email"
                    containerClass="prescoring__input"
                    required
                />

                <Input
                    label="Your date of birth"
                    placeholder="Select Date and Time"
                    name="date"
                    containerClass="prescoring__input"
                    required
                />

                <Input
                    label="Your passport series"
                    placeholder="0000"
                    name="seria"
                    containerClass="prescoring__input"
                    required
                />

                <Input
                    label="Your passport number"
                    placeholder="000000"
                    name="number"
                    containerClass="prescoring__input"
                    required
                />
            </div>

            <Button type="submit" classes="prescoring__button">
                Continue
            </Button>
        </form>
    )
};

export default Prescoring;
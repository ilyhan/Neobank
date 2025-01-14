import Button from "@/common/ui/button/Button";
import Loader from "@/common/components/loader/Loader";
import { useActions } from "@/store/actions";
import { usePostSchedule } from "@/api/hookApi";
import { FormEvent, useEffect, useState } from "react";
import { EApplicationStatus } from "@/common/enums/application";
import Checkbox from "@/common/ui/checkbox/Checkbox";

interface IPaymentFormProps {
    appId: number;
};

const PaymentForm = ({ appId }: IPaymentFormProps) => {
    const [isChecked, setIsChecked] = useState(true);
    const { mutate, isLoading, isSuccess } = usePostSchedule(appId);
    const { setNextStep } = useActions();

    useEffect(() => {
        if (isSuccess) {
            setNextStep(EApplicationStatus.DOCUMENT_CREATED);
        }
    }, [isSuccess]);

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        mutate(null);
    };

    return (
        <form className="schedule__form" onSubmit={handleSend}>
            <Checkbox
                name="chedule-cb"
                label="I agree with the payment schedule"
                isRequired={true}
                onChecked={setIsChecked}
            />

            <Button classes="schedule__button" type="submit" disabled={isLoading || isChecked}>
                {isLoading
                    ? <Loader style={{ width: "20px" }} />
                    : "Send"
                }
            </Button>
        </form>
    )
};

export default PaymentForm;
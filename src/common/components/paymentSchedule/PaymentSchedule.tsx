import { paymentScheduleHeader } from "@/common/arrays/tableHeaderList";
import "@/common/components/paymentSchedule/style.scss";
import { IPayment } from "@/common/interfaces/application";
import Button from "@/common/ui/button/Button";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import Modal from "@/common/ui/modal/Modal";
import Table from "@/common/ui/table/Table";
import { FormEvent, useEffect, useState } from "react";
import DenyModal from "@/common/components/paymentSchedule/modal/DenyModal";
import { usePostSchedule } from "@/api/hookApi";
import { useNavigate } from "react-router-dom";
import Loader from "@/common/components/loader/Loader";

interface IPaymentScheduleProps {
    schedule: IPayment[];
    appId: number;
    onSuccess: () => void;
};

const PaymentSchedule = ({ schedule, appId, onSuccess }: IPaymentScheduleProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const { mutate, isLoading, isSuccess } = usePostSchedule(appId);

    useEffect(() => {
        if (isSuccess) {
            onSuccess();
        }
    }, [isSuccess]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);

        if (isDeleted) {
            navigate('/home')
        }
    };

    const handleDelete = () => {
        setIsDeleted(true);
    };

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        mutate(null);
    };

    return (
        <section className="schedule">
            <div className="schedule__header">
                <h2 className="schedule__title">Payment Schedule</h2>
                <p className="schedule__step">Step 3 of 5</p>
            </div>

            <Table<IPayment>
                header={paymentScheduleHeader}
                content={schedule}
            />

            <div className="schedule__actions">
                <Button classes="schedule__button schedule__button_deny" onClick={handleOpen}>
                    Deny
                </Button>

                <form className="schedule__form" onSubmit={handleSend}>
                    <Checkbox
                        name="chedule-cb"
                        label="I agree with the payment schedule"
                        isRequired={true}
                    />

                    <Button classes="schedule__button" type="submit" disabled={isLoading}>
                        {isLoading
                            ? <Loader style={{ width: "20px" }} />
                            : "Send"
                        }
                    </Button>
                </form>
            </div>

            <Modal onClose={handleClose} isOpen={isOpen}>
                <DenyModal
                    appId={appId}
                    onClose={handleClose}
                    onDelete={handleDelete}
                />
            </Modal>
        </section>
    )
};

export default PaymentSchedule;
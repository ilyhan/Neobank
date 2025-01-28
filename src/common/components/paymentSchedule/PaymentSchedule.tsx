import { paymentScheduleHeader } from "@/common/arrays/tableHeaderList";
import "@/common/components/paymentSchedule/style.scss";
import { IPayment } from "@/common/interfaces/application";
import Button from "@/common/ui/button/Button";
import Modal from "@/common/ui/modal/Modal";
import Table from "@/common/ui/table/Table";
import { useState } from "react";
import DenyModal from "@/common/components/paymentSchedule/modal/DenyModal";
import { useNavigate } from "react-router-dom";
import PaymentForm from "@/common/components/paymentSchedule/PaymentForm";
import { useActions } from "@/store/actions";
interface IPaymentScheduleProps {
    schedule: IPayment[];
    appId: number;
};

const PaymentSchedule = ({ schedule, appId }: IPaymentScheduleProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const { resetApplication } = useActions();
    const navigate = useNavigate();

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);

        if (isDeleted) {
            navigate('/home');
            resetApplication();
        }
    };

    const handleDelete = () => {
        setIsDeleted(true);
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

                <PaymentForm appId={appId} />
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
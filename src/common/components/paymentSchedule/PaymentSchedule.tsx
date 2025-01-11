import { paymentScheduleHeader } from "@/common/arrays/tableHeaderList";
import "@/common/components/paymentSchedule/style.scss";
import { IPayment } from "@/common/interfaces/application";
import Button from "@/common/ui/button/Button";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import Table from "@/common/ui/table/Table";

interface IPaymentScheduleProps {
    schedule: IPayment[];
};

const PaymentSchedule = ({ schedule }: IPaymentScheduleProps) => {
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
                <Button classes="schedule__button schedule__button_deny">
                    Deny
                </Button>

                <form className="schedule__form">
                    <Checkbox
                        name="chedule-cb"
                        label="I agree with the payment schedule"
                        isRequired={true}
                    />

                    <Button classes="schedule__button" type="submit">
                        Send
                    </Button>
                </form>
            </div>
        </section>
    )
};

export default PaymentSchedule;
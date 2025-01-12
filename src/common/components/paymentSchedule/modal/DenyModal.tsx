import Button from "@/common/ui/button/Button";
import "@/common/components/paymentSchedule/modal/style.scss";
import { useState } from "react";

const DenyModal = () => {
    const [isDeny, setIsDeny] = useState(false);

    const handleDeny = () => {
        setIsDeny(true);
    }

    return (
        !isDeny
            ? <div className="deny-modal">
                <h3 className="deny-modal__title">Deny application</h3>
                <p className="deny-modal__description">You exactly sure, you want to cancel this application?</p>

                <div className="deny-modal__actions">
                    <Button onClick={handleDeny} classes="deny-modal__button deny-modal__button_deny">
                        Deny
                    </Button>

                    <Button classes="deny-modal__button">
                        Cancel
                    </Button>
                </div>
            </div>
            : <div className="deny-modal">
                <h3 className="deny-modal__title">Deny application</h3>
                <p className="deny-modal__description">Your application has been deny!</p>

                <div className="deny-modal__actions">
                    <Button classes="deny-modal__button">
                        Go home
                    </Button>
                </div>
            </div>
    )
};

export default DenyModal;
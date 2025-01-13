import Button from "@/common/ui/button/Button";
import "@/common/components/paymentSchedule/modal/style.scss";
import { useEffect, useState } from "react";
import { useDenyApplication } from "@/api/hookApi";
import Loader from "@/common/components/loader/Loader";
import { useActions } from "@/store/actions";

interface IDenyModalProps {
    appId: number;
    onClose: () => void;
    onDelete: () => void;
};

const DenyModal = ({ appId, onClose, onDelete }: IDenyModalProps) => {
    const [isDeny, setIsDeny] = useState(false);
    const { mutate, isLoading, isSuccess } = useDenyApplication(appId);
    const { resetApplication } = useActions();

    useEffect(() => {
        if (isSuccess) {
            onDelete();
            setIsDeny(true);
            resetApplication();
        }
    }, [isSuccess]);

    const handleDeny = () => {
        mutate(null);
    };

    return (
        !isDeny
            ? <div className="deny-modal">
                <h3 className="deny-modal__title">Deny application</h3>
                <p className="deny-modal__description">You exactly sure, you want to cancel this application?</p>

                <div className="deny-modal__actions">
                    <Button
                        onClick={handleDeny}
                        classes="deny-modal__button deny-modal__button_deny"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? <Loader style={{ width: "20px" }} />
                            : "Deny"
                        }
                    </Button>

                    <Button classes="deny-modal__button" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
            : <div className="deny-modal">
                <h3 className="deny-modal__title">Deny application</h3>
                <p className="deny-modal__description">Your application has been deny!</p>

                <div className="deny-modal__actions">
                    <Button classes="deny-modal__button" onClick={onClose}>
                        Go home
                    </Button>
                </div>
            </div>
    )
};

export default DenyModal;
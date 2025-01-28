import { usePostCode } from "@/api/hookApi";
import "@/common/components/confirmation/style.scss";
import VerificationInput from "@/common/ui/verificationInput/VerificationInput";
import { useEffect } from "react";
import Loader from "@/common/components/loader/Loader";
import { useActions } from "@/store/actions";

interface IConfirmationProps {
    appId: number;
    onSuccess?: () => void;
};

const Confirmation = ({ appId, onSuccess }: IConfirmationProps) => {
    const { mutate, isSuccess, isLoading, isError } = usePostCode(appId);
    const { resetApplication } = useActions();

    useEffect(() => {
        if (isSuccess) {
            onSuccess?.();
            resetApplication();
        }
    }, [isSuccess]);

    const handleSuccess = (code: string) => {
        mutate(code);
    };

    return (
        <section className="confirmation">
            <h2 className="confirmation__title">Please enter confirmation code</h2>

            <VerificationInput
                length={4}
                isError={isError}
                onSuccess={handleSuccess}
            />

            <div className="confirmation__loader-wrapper">
                {isLoading && <Loader style={{ height: '30px', width: '30px' }} />}
            </div>
        </section>
    )
};

export default Confirmation;


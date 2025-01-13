import PaymentSchedule from "@/common/components/paymentSchedule/PaymentSchedule";
import Notification from "@/common/components/messages/notification/Notification";
import { useQueryApplication } from "@/api/hookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import Loader from "@/common/components/loader/Loader";

const ScheduleLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();
    const [next, setNext] = useState(false);

    if (!appId) {
        navigate('/home');
        return;
    }

    const { data, isLoading } = useQueryApplication(appId);

    useEffect(() => {
        if (data) {
            if (NumAppStatus[data.status] < NumAppStatus[EApplicationStatus.CC_APPROVED]) {
                navigate("/home");
            }
        }
    }, [data]);

    const nextStep = () => {
        setNext(true);
    };

    return (
        isLoading
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }} />
            : data && !next && NumAppStatus[data.status] == NumAppStatus[EApplicationStatus.CC_APPROVED]
                ? <PaymentSchedule
                    schedule={data.credit.paymentSchedule}
                    appId={Number(appId)}
                    onSuccess={nextStep}
                />
                : <Notification
                    title="Documents are formed"
                    description="Documents for signing will be sent to your email"
                />

    )
};

export default ScheduleLayout;
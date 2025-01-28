import PaymentSchedule from "@/common/components/paymentSchedule/PaymentSchedule";
import Notification from "@/common/components/messages/notification/Notification";
import { useQueryApplication } from "@/api/hookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Loader from "@/common/components/loader/Loader";

const ScheduleLayout = () => {
    const navigate = useNavigate();
    const application = useSelector((state: RootState) => state.applicationReducer);
    const { applicationId: appId } = useParams();
    const { data, refetch, isLoading } = useQueryApplication(Number(appId), false);

    useEffect(() => {
        if (Number(appId) != application.applicationId) {
            navigate('/home');
        }
        else {
            refetch();
        }
    }, []);

    useEffect(() => {
        if (NumAppStatus[application.step] < NumAppStatus[EApplicationStatus.CC_APPROVED]) {
            navigate("/home");
        }
    }, [application]);

    return (
        isLoading
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }} />
            : data && data.credit && NumAppStatus[application.step] == NumAppStatus[EApplicationStatus.CC_APPROVED]
                ? <PaymentSchedule
                    schedule={data.credit.paymentSchedule}
                    appId={Number(appId)}
                />
                : <Notification
                    title="Documents are formed"
                    description="Documents for signing will be sent to your email"
                />
    )
};

export default ScheduleLayout;
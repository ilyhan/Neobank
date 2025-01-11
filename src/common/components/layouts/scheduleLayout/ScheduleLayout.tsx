import PaymentSchedule from "@/common/components/paymentSchedule/PaymentSchedule";
import Notification from "@/common/components/messages/notification/Notification";
import { useQueryApplication } from "@/api/hookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { EApplicationStatus } from "@/common/enums/application";
import Loader from "@/common/components/loader/Loader";

const ScheduleLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();

    if (!appId) {
        navigate('/home');
        return;
    }

    const { data, isLoading } = useQueryApplication(appId);

    useEffect(() => {
        if (data) {
            if (data.status == EApplicationStatus.CC_DENIED) {
                navigate("/home");
            }
        }
    }, [data]);

    return (
        isLoading
            ? <Loader />
            : data.status == EApplicationStatus.CC_APPROVED && data
                ? <PaymentSchedule schedule={data.credit.paymentSchedule}/>
                : <Notification
                    title="Documents are formed"
                    description="Documents for signing will be sent to your email"
                />

    )
};

export default ScheduleLayout;
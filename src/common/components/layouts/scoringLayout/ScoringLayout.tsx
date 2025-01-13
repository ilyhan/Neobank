import { useQueryApplication } from "@/api/hookApi";
import Scoring from "@/common/components/form/scoring/Scoring";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/common/components/loader/Loader";
import Notification from "@/common/components/messages/notification/Notification";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import { useActions } from "@/store/actions";

const ScoringLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();
    const [next, setNext] = useState(false);
    const { resetApplication } = useActions();
    const timeDelay = 10 * 1000;

    if (!appId) {
        navigate('/home');
        return;
    };

    const { data, isLoading, refetch } = useQueryApplication(appId);

    useEffect(() => {
        if (data) {
            if (data.status == EApplicationStatus.CC_DENIED) {
                resetApplication();
            }

            if (NumAppStatus[data.status] < NumAppStatus[EApplicationStatus.APPROVED]) {
                navigate("/home");
            }
        }
    }, [data]);

    const nextStep = () => {
        setNext(true);

        setTimeout(() => {
            refetch();
        }, timeDelay);
    };

    return (
        isLoading
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }} />
            : data && NumAppStatus[data.status] == NumAppStatus[EApplicationStatus.APPROVED] && !next
                ? <Scoring onSuccess={nextStep} />
                : <Notification
                    title="Wait for a decision on the application"
                    description="The answer will come to your mail within 10 minutes"
                />
    )
};

export default ScoringLayout;
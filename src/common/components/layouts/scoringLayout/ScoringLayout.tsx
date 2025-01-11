import { useQueryApplication } from "@/api/hookApi";
import Scoring from "@/common/components/form/scoring/Scoring";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/common/components/loader/Loader";
import Notification from "@/common/components/messages/notification/Notification";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { EApplicationStatus } from "@/common/enums/application";

const ScoringLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();

    if (!appId) {
        navigate('/home');
        return;
    }

    const isSent = useSelector((state: RootState) => state.applicationReducer.isSentScoring);
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
            ? <Loader style={{ margin: '50px 50%' }} />
            : data.status == EApplicationStatus.APPROVED && !isSent
                ? <Scoring />
                : <Notification
                    title="Wait for a decision on the application"
                    description="The answer will come to your mail within 10 minutes"
                />
    )
};

export default ScoringLayout;
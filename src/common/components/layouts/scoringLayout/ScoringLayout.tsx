import { useQueryApplication } from "@/api/hookApi";
import Scoring from "@/common/components/form/scoring/Scoring";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Notification from "@/common/components/messages/notification/Notification";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import { useActions } from "@/store/actions";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ScoringLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();
    const { resetApplication, setNextStep } = useActions();
    const timeDelay = 10 * 1000;
    const application = useSelector((state: RootState) => state.applicationReducer);

    useEffect(() => {
        if (appId != application.statementId) {
            navigate('/home');
        };
    }, []);

    const { data, refetch } = useQueryApplication(appId!, false);

    useEffect(() => {
        if(data){
            if (data.status == EApplicationStatus.CC_DENIED) {
                setNextStep(EApplicationStatus.CC_DENIED);
            }
        }
    }, [data]);

    useEffect(() => {
        if (application.step == EApplicationStatus.CC_DENIED) {
            resetApplication();
        }

        if (NumAppStatus[application.step] < NumAppStatus[EApplicationStatus.APPROVED]) {
            navigate("/home");
        }
    }, [application]);

    const nextStep = () => {
        setTimeout(() => {
            refetch();
        }, timeDelay);
    };

    return (
        NumAppStatus[application.step] == NumAppStatus[EApplicationStatus.APPROVED]
            ? <Scoring onSuccess={nextStep} />
            : <Notification
                title="Wait for a decision on the application"
                description="The answer will come to your mail within 10 minutes"
            />
    )
};

export default ScoringLayout;
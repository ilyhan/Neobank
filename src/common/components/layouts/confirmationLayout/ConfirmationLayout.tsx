import Confirmation from "@/common/components/confirmation/Confirmation";
import Сongratulation from "@/common/components/congratulation/Сongratulation";
import { EApplicationStep, NumAppStatus } from "@/common/enums/application";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ConfirmationLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();
    const [next, setNext] = useState(false);
    const application = useSelector((state: RootState) => state.applicationReducer);

    useEffect(() => {
        if (Number(appId) != application.applicationId) {
            navigate('/home');
        };
    }, []);

    useEffect(() => {
        if (NumAppStatus[application.step] < NumAppStatus[EApplicationStep.CODE]) {
            navigate("/home");
        }
    }, []);

    const nextStep = () => {
        setNext(true);
    };

    return (
        !next && NumAppStatus[application.step] === NumAppStatus[EApplicationStep.CODE]
            ? <Confirmation appId={Number(appId)} onSuccess={nextStep} />
            : <Сongratulation />
    )
};

export default ConfirmationLayout;
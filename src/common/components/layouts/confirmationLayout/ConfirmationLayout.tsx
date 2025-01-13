import { useQueryApplication } from "@/api/hookApi";
import Confirmation from "@/common/components/confirmation/Confirmation";
import Сongratulation from "@/common/components/congratulation/Сongratulation";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/common/components/loader/Loader";

const ConfirmationLayout = () => {
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
            if (!data.sesCode && NumAppStatus[data.status] < NumAppStatus[EApplicationStatus.DOCUMENT_CREATED]) {
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
            : data && data.sesCode && !next && NumAppStatus[data.status] === NumAppStatus[EApplicationStatus.DOCUMENT_CREATED]
                ? <Confirmation appId={Number(appId)} onSuccess={nextStep}/>
                : <Сongratulation />
    )
};

export default ConfirmationLayout;
import Notification from "@/common/components/messages/notification/Notification";
import { useQueryApplication } from "@/api/hookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import Loader from "@/common/components/loader/Loader";
import DocumentSign from "@/common/components/documentSign/DocumentSign";

const DocumentLayout = () => {
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
            if (NumAppStatus[data.status] < NumAppStatus[EApplicationStatus.DOCUMENT_CREATED]) {
                navigate("/home");
            }
        }
    }, [data]);

    const nextStep = () => {
        setNext(true);
    };

    return (
        isLoading
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }}/>
            : data && !data.sesCode && NumAppStatus[data.status] == NumAppStatus[EApplicationStatus.DOCUMENT_CREATED] && !next
                ? <DocumentSign appId={Number(appId)} onSuccess={nextStep}/>
                : <Notification
                    title="Documents have been successfully signed and sent for approval"
                    description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
                    wrapperStyle={{ maxWidth: "555px" }}
                    descriptionStyle={{ maxWidth: "410px", marginInline: "auto" }}
                />
    )
};

export default DocumentLayout;
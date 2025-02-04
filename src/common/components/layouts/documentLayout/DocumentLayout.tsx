import Notification from "@/common/components/messages/notification/Notification";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { EApplicationStatus, NumAppStatus } from "@/common/enums/application";
import DocumentSign from "@/common/components/documentSign/DocumentSign";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const DocumentLayout = () => {
    const navigate = useNavigate();
    const { applicationId: appId } = useParams();
    const application = useSelector((state: RootState) => state.applicationReducer);

    useEffect(() => {
        if (appId != application.statementId) {
            navigate('/home');
        };
    }, []);

    useEffect(() => {
        if (NumAppStatus[application.step] < NumAppStatus[EApplicationStatus.DOCUMENT_CREATED]) {
            navigate("/home");
        }
    }, [application]);

    return (
        NumAppStatus[application.step] == NumAppStatus[EApplicationStatus.DOCUMENT_CREATED]
            ? <DocumentSign appId={appId!} />
            : <Notification
                title="Documents have been successfully signed and sent for approval"
                description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
                wrapperStyle={{ maxWidth: "555px" }}
                descriptionStyle={{ maxWidth: "410px", marginInline: "auto" }}
            />
    )
};

export default DocumentLayout;
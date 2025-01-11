import Notification from "@/common/components/messages/notification/Notification";
import { useQueryApplication } from "@/api/hookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { EApplicationStatus } from "@/common/enums/application";
import Loader from "@/common/components/loader/Loader";
import DocumentSign from "@/common/components/documentSign/DocumentSign";

const DocumentLayout = () => {
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
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }}/>
            : data.status == EApplicationStatus.PREPARE_DOCUMENTS && data
                ? <DocumentSign />
                : <Notification
                    title="Documents have been successfully signed and sent for approval"
                    description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
                    wrapperStyle={{ maxWidth: "555px" }}
                    descriptionStyle={{ maxWidth: "410px", marginInline: "auto" }}
                />
    )
};

export default DocumentLayout;
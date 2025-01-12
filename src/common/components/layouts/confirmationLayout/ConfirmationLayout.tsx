import { useQueryApplication } from "@/api/hookApi";
import Confirmation from "@/common/components/confirmation/Confirmation";
import Сongratulation from "@/common/components/congratulation/Сongratulation";
import { EApplicationStatus } from "@/common/enums/application";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/common/components/loader/Loader";

const ConfirmationLayout = () => {
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
            ? <Loader style={{ margin: '50px 50%', translate: '-50%' }} />
            : data.status === EApplicationStatus.DOCUMENTS_SIGNED && data
                ? <Confirmation />
                : <Сongratulation />

    )
};

export default ConfirmationLayout;
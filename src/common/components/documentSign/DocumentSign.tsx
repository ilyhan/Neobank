import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import "@/common/components/documentSign/style.scss";
import { usePostDocuments } from "@/api/hookApi";
import { FormEvent, useEffect, useState } from "react";
import Loader from "@/common/components/loader/Loader";
import { useActions } from "@/store/actions";
import { EApplicationStep } from "@/common/enums/application";

interface IDocumentSignProps {
    appId: number | string;
};

const DocumentSign = ({ appId }: IDocumentSignProps) => {
    const [isChecked, setIsChecked] = useState(true);
    const { mutate, isSuccess, isLoading } = usePostDocuments(appId!);
    const { setNextStep } = useActions();

    useEffect(() => {
        if (isSuccess) {
            setNextStep(EApplicationStep.CODE);
        }
    }, [isSuccess]);

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        mutate(null);
    };

    return (
        <section className="document-sign">
            <div className="document-sign__header">
                <h2 className="document-sign__title">Signing of documents</h2>
                <p className="document-sign__step">Step 4 of 5</p>
            </div>

            <p className="document-sign__description">
                Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                processing of personal data.
            </p>

            <a className="document-sign__file-link" href="/public/files/credit-card-offer.pdf" target="_blank">
                <SvgHelper iconName="file" width={60} height={60} />
                Information on your card
            </a>

            <form className="document-sign__form" onSubmit={handleSend}>
                <Checkbox
                    name="file-cb"
                    label="I agree"
                    isRequired={true}
                    onChecked={setIsChecked}
                />

                <Button classes="document-sign__button" type="submit" disabled={isLoading || isChecked}>
                    {isLoading
                        ? <Loader style={{ width: "20px" }} />
                        : "Send"
                    }
                </Button>
            </form>
        </section>
    )
};

export default DocumentSign;
import "@/common/components/confirmation/style.scss";
import VerificationInput from "@/common/ui/verificationInput/VerificationInput";

const Confirmation = () => {
    return (
        <section className="confirmation">
            <h2 className="confirmation__title">Please enter confirmation code</h2>
            
            <VerificationInput 
                code="1234"
                onSuccess={()=>console}
            />
        </section>
    )
};

export default Confirmation;


import "@/common/ui/modal/style.scss";
import { createPortal } from "react-dom";
import ButtonIcon from "@/common/ui/buttonIcon/ButtonIcon";
import { ReactNode, useEffect, useState } from "react";

interface IModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    withCloseIcon?: boolean;
};

const Modal = ({ isOpen, children, onClose, withCloseIcon = true }: IModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeModal = () => {
        setIsVisible(false);

        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`modal__overlay ${isVisible ? "modal__overlay_open" : ""}`}
            onClick={closeModal}
        >
            <div
                className={`modal__content ${isVisible ? "modal__content_open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {withCloseIcon && (
                    <ButtonIcon
                        classes="modal__close-btn"
                        icon="close"
                        onClick={closeModal}
                    />
                )}
                {children}
            </div>
        </div>,
        document.getElementById('root')!
    )
};

export default Modal;
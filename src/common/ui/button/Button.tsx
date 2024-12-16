import "@/common/ui/Button/style.scss";
import { forwardRef } from "react";

interface IButtonProps {
    children: React.ReactNode;
    title?: string;
    onClick?: () => void;
    classes?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ 
    children, 
    onClick, 
    title, 
    classes = '', 
    type = 'button', 
    disabled = false 
}, ref) => {
    return (
        <button
            onClick={onClick}
            className={"button" + " " + classes}
            type={type}
            disabled={disabled}
            title={title}
            ref={ref}
        >
            {children}
        </button>
    )
});

export default Button;
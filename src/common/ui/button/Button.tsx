import "@/common/ui/Button/style.scss";

interface IButtonProps {
    children: React.ReactNode;
    title?: string;
    onClick?: () => void;
    classes?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = ({ 
    children, 
    onClick, 
    title, 
    classes = '', 
    type = 'button', 
    disabled = false 
}: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={"button" + " " + classes}
            type={type}
            disabled={disabled}
            title={title}
        >
            {children}
        </button>
    )
};

export default Button;
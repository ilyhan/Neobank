import "@/common/ui/Button/style.scss";

interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    classes?: string;
    type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, classes = '', type = 'button' }: IButtonProps) => {
    return (
        <button onClick={onClick} className={"button" + " " + classes} type={type}>
            {children}
        </button>
    )
};

export default Button;
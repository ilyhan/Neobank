import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import "@/common/ui/buttonIcon/style.scss";

interface IButtonIconProps {
    icon: ImageComponentsTypes;
    onClick?: () => void;
    size?: 20 | 30;
    classes?: string;
}

const ButtonIcon = ({ icon, onClick, size = 20, classes = '' }: IButtonIconProps) => {
    return (
        <Button onClick={onClick} classes={`button-icon button-icon__size-${size} ${classes}`} >
            <SvgHelper iconName={icon} height={size} width={size} />
        </Button>
    )
};

export default ButtonIcon;
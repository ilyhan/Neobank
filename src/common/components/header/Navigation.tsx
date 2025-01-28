import ButtonIcon from "@/common/ui/buttonIcon/ButtonIcon";
import { NavLink } from "react-router-dom";
import "@/common/components/header/style.scss"
import RenderList from "@/common/helper/RenderList";
import { navList } from "@/common/arrays/navList";

interface INavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

const Navigation = ({ isOpen, onClose }: INavigationProps) => {
    return (
        <nav className={`header__nav ${isOpen && 'header__nav_active'}`}>
            <ButtonIcon
                icon="close"
                classes="header__close-btn"
                onClick={onClose}
            />

            <RenderList
                items={navList}
                classes="header__list"
                renderItem={(item, index) => (
                    <li key={index}>
                        <NavLink to={item.link} className="header__link">
                            {item.title}
                        </NavLink>
                    </li>
                )}
            />
        </nav>
    )
};

export default Navigation;
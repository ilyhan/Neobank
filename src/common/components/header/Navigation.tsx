import ButtonIcon from "@/common/ui/buttonIcon/ButtonIcon";
import { NavLink } from "react-router-dom";
import "@/common/components/header/style.scss"

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

            <ul className="header__list">
                <li>
                    <NavLink to="credit-card" className="header__link">
                        Credit card
                    </NavLink>
                </li>

                <li>
                    <NavLink to="product" className="header__link">
                        Product
                    </NavLink>
                </li>

                <li>
                    <NavLink to="account" className="header__link">
                        Account
                    </NavLink>
                </li>

                <li>
                    <NavLink to="resources" className="header__link">
                        Resources
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
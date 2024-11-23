import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import ButtonIcon from "@/common/ui/buttonIcon/ButtonIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/common/components/header/Navigation";
import "@/common/components/header/style.scss"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <Link to="home">
                <SvgHelper iconName="logo" width={100} />
            </Link>

            <Navigation
                isOpen={isOpen}
                onClose={handleClose}
            />

            <ButtonIcon
                icon="menu"
                classes="header__burger-menu"
                onClick={handleOpen}
            />

            <Button classes={`header__button ${isOpen && 'header__button_active'}`}>
                Online Bank
            </Button>
        </header>
    )
};

export default Header;
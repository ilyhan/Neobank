import "@/common/ui/divider/style.scss";

interface IDividerProps {
    classes?: string;
    position?: 'horizontal' | 'vertical';
    style?: 'solid' | 'dashed';
};

const Divider = ({ classes = '', position = 'horizontal', style = 'solid' }: IDividerProps) => {
    return (
        <div className={`divider ${classes} ${position} ${style}`}></div>
    )
};

export default Divider;

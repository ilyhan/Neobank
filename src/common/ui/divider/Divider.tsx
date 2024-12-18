import "@/common/ui/divider/style.scss";

interface IDividerProps {
    classes?: string;
};

const Divider = ({classes = ''}: IDividerProps) => {
    return (
        <div className={`divider ${classes}`}></div>
    )
};

export default Divider;

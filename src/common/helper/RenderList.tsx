
interface IListProps<T> {
    items: T[];
    renderItem: (_:T, __:number) => React.ReactNode;
    classes?: string;
}

const RenderList = <T,>({ items, renderItem , classes = ''}: IListProps<T>) => {
    return (
        <ul className={`${classes}`}>
            {items.map((item, index) => (
                renderItem(item, index)
            ))}
        </ul>
    )
};

export default RenderList;
import React, { forwardRef, HTMLAttributes, Ref } from 'react';

interface IListProps<T> extends HTMLAttributes<HTMLUListElement>{
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    classes?: string;
}

const RenderList = forwardRef<HTMLUListElement, IListProps<any>>(
    <T,>({ items, renderItem, classes = '' , ...props}: IListProps<T>, ref: Ref<HTMLUListElement>) => {
        return (
            <ul ref={ref} {...props} className={classes} >
                {items.map((item, index) => renderItem(item, index))}
            </ul>
        );
    }
);

export default RenderList;

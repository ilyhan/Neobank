import logo from '@/common/svg-helper/icons/logo.svg?react';
import menu from '@/common/svg-helper/icons/menu.svg?react';
import close from '@/common/svg-helper/icons/close.svg?react';

export type IconType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;

export type ImageComponentsTypes =
    | 'logo'
    | 'menu'
    | 'close';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    logo,
    menu,
    close,
};

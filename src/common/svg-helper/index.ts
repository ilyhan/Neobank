import logo from '@/common/svg-helper/icons/logo.svg?react';

export type IconType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;

export type ImageComponentsTypes =
    | 'logo';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    logo,
};

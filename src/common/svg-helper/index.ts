import logo from '@/common/svg-helper/icons/logo.svg?react';
import menu from '@/common/svg-helper/icons/menu.svg?react';
import close from '@/common/svg-helper/icons/close.svg?react';
import success from '@/common/svg-helper/icons/success.svg?react';
import email from '@/common/svg-helper/icons/email.svg?react';
import send from '@/common/svg-helper/icons/send.svg?react';
import arrow from '@/common/svg-helper/icons/arrow.svg?react';
import bag from '@/common/svg-helper/icons/bag.svg?react';
import calendar from '@/common/svg-helper/icons/calendar.svg?react';
import card from '@/common/svg-helper/icons/card.svg?react';
import clock from '@/common/svg-helper/icons/clock.svg?react';
import money from '@/common/svg-helper/icons/money.svg?react';
import arrow_up from '@/common/svg-helper/icons/arrow_up.svg?react';
import success_input from '@/common/svg-helper/icons/successInput.svg?react';
import error from '@/common/svg-helper/icons/error.svg?react';
import file from '@/common/svg-helper/icons/file.svg?react';
import arrow_drop_up from '@/common/svg-helper/icons/arrow_drop_up.svg?react';

export type IconType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;

export type ImageComponentsTypes =
    | 'logo'
    | 'menu'
    | 'close'
    | 'success'
    | 'email'
    | 'send'
    | 'arrow'
    | 'bag'
    | 'calendar'
    | 'card'
    | 'clock'
    | 'money'
    | 'arrow_up'
    | 'success_input'
    | 'error'
    | 'file'
    | 'arrow_drop_up';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    logo,
    menu,
    close,
    success,
    email,
    send,
    arrow,
    bag,
    calendar,
    card,
    clock,
    money,
    arrow_up,
    success_input,
    error,
    file,
    arrow_drop_up,
};

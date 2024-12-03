import { FC, useMemo, memo } from 'react';
import { ImageComponents, ImageComponentsTypes } from '@/common/svg-helper/index';

interface SvgHelperProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  iconName: ImageComponentsTypes;
  width?: number;
  height?: number;
}

export const SvgHelper: FC<SvgHelperProps> = memo(
  ({ iconName, width, height, ...props }) => {
    const CurrentIcon = useMemo(() => ImageComponents[iconName], [iconName]);

    return CurrentIcon ? (
      <CurrentIcon
        {...props}
        width={width ?? '25px'}
        height={height ?? '25px'}
      />
    ) : null;
  },
);

export default SvgHelper;

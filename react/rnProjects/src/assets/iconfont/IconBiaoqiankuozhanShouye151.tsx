/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconBiaoqiankuozhanShouye151: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M904.8576 424.8576l-344.32-289.536a75.33568 75.33568 0 0 0-97.1264 0L119.1424 424.8576c-24.5248 20.6336-33.3312 53.4528-22.3232 83.5584 11.008 30.1056 38.8096 49.6128 70.8608 49.6128h22.0672v294.9632c0 25.1904 20.48 45.6704 45.6704 45.6704H469.504v-195.1232h84.9408v195.1232h234.0864c25.1904 0 45.6704-20.48 45.6704-45.6704v-294.9632h22.0672c32.0512 0 59.904-19.456 70.8608-49.6128 11.008-30.1056 2.2528-62.8736-22.272-83.5584z"
        fill={getIconColor(color, 0, '#9fc6ff')}
      />
    </Svg>
  );
};

IconBiaoqiankuozhanShouye151.defaultProps = {
  size: 18,
};

IconBiaoqiankuozhanShouye151 = React.memo ? React.memo(IconBiaoqiankuozhanShouye151) : IconBiaoqiankuozhanShouye151;

export default IconBiaoqiankuozhanShouye151;

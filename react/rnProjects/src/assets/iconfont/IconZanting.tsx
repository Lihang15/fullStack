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

let IconZanting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M142.293 0h22.261q77.913 0 77.913 77.913v868.174q0 77.913-77.913 77.913h-22.26q-77.914 0-77.914-77.913V77.913Q64.38 0 142.293 0zM810.12 0h22.26q77.913 0 77.913 77.913v868.174q0 77.913-77.913 77.913h-22.26q-77.913 0-77.913-77.913V77.913Q732.207 0 810.12 0z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconZanting.defaultProps = {
  size: 18,
};

IconZanting = React.memo ? React.memo(IconZanting) : IconZanting;

export default IconZanting;

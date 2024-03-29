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

let IconYixianshi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M857.44 591.29c4.43-21 12.58-63.41 12.58-90.31a352 352 0 1 0-704 0 354.11 354.11 0 0 0 7 70.25 47.08 47.08 0 0 0 63.48 34.5c25.78-10.22 39.07-11.74 44.7-11.74h45.57l-1.71 197.54a44 44 0 0 1-43.8 43.47 120.92 120.92 0 0 1-120.5-120.51 118.44 118.44 0 0 1 13.58-55.37A46.46 46.46 0 0 0 179 630a45.78 45.78 0 0 0-48.41-38l-3.27 0.23a20 20 0 0 0 2.75 39.9l3.27-0.22a5.9 5.9 0 0 1 6.24 4.89 6.1 6.1 0 0 1-0.67 3.88 160.19 160.19 0 0 0-18.12 73.89c0 88.51 72 160.51 160.5 160.51a83.84 83.84 0 0 0 83.85-83.13L367 574.16A20 20 0 0 0 347 554h-65.74c-15.06 0-35.06 4.89-59.44 14.55a6.87 6.87 0 0 1-5.93-0.35 7.08 7.08 0 0 1-3.61-4.9 315 315 0 0 1-6.22-62.3 312 312 0 1 1 624 0c0 31.58-14.17 93.31-14.31 93.93a20 20 0 0 0 8 20.87 120.87 120.87 0 0 1 51.63 98.71A120.92 120.92 0 0 1 754.83 835h-1.33a43.86 43.86 0 0 1-43.86-44.23L711.35 594h43.48a120.37 120.37 0 0 1 22.92 2.2 20 20 0 0 0 7.64-39.26 160.26 160.26 0 0 0-30.56-2.94h-63.31a20 20 0 0 0-20 19.82l-1.88 216.61A83.87 83.87 0 0 0 753.5 875h1.33c88.5 0 160.5-72 160.5-160.51a160.72 160.72 0 0 0-57.89-123.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M466 587a20 20 0 0 0-20 20v185a20 20 0 0 0 40 0V607a20 20 0 0 0-20-20zM558 587a20 20 0 0 0-20 20v185a20 20 0 0 0 40 0V607a20 20 0 0 0-20-20z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconYixianshi.defaultProps = {
  size: 18,
};

IconYixianshi = React.memo ? React.memo(IconYixianshi) : IconYixianshi;

export default IconYixianshi;

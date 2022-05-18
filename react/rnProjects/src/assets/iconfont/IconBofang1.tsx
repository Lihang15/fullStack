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

let IconBofang1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M735.704615 483.643077l-297.747692-220.553846c-23.630769-17.329231-58.289231 0-58.289231 29.932307v441.107693c0 29.932308 34.658462 47.261538 58.289231 29.932307l297.747692-220.553846c18.904615-14.178462 18.904615-44.110769 0-59.864615z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M516.726154 986.190769c-259.938462 0-472.615385-212.676923-472.615385-472.615384s212.676923-472.615385 472.615385-472.615385 472.615385 212.676923 472.615384 472.615385-211.101538 472.615385-472.615384 472.615384z m0-897.969231c-234.732308 0-425.353846 190.621538-425.353846 425.353847s190.621538 425.353846 425.353846 425.353846 425.353846-190.621538 425.353846-425.353846-190.621538-425.353846-425.353846-425.353847z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBofang1.defaultProps = {
  size: 18,
};

IconBofang1 = React.memo ? React.memo(IconBofang1) : IconBofang1;

export default IconBofang1;

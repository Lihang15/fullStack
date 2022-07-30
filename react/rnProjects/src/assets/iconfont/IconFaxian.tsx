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

let IconFaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M648.256 290.794667l-235.733333 105.6a32 32 0 0 0-16.128 16.128l-105.6 235.733333c-12.010667 26.816 15.466667 54.293333 42.282666 42.282667l235.733334-105.6a32 32 0 0 0 16.128-16.128l105.6-235.733334c12.010667-26.816-15.466667-54.293333-42.282667-42.282666z m-50.432 92.693333l-66.304 148.032-148.032 66.304 66.304-148.032 148.032-66.304z"
        fill={getIconColor(color, 0, '#666666')}
      />
      <Path
        d="M512 53.333333C258.688 53.333333 53.333333 258.688 53.333333 512S258.688 970.666667 512 970.666667 970.666667 765.312 970.666667 512 765.312 53.333333 512 53.333333z m0 64c217.962667 0 394.666667 176.704 394.666667 394.666667S729.962667 906.666667 512 906.666667 117.333333 729.962667 117.333333 512 294.037333 117.333333 512 117.333333z"
        fill={getIconColor(color, 1, '#666666')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

IconFaxian = React.memo ? React.memo(IconFaxian) : IconFaxian;

export default IconFaxian;

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

let IconMoreinfoCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M432.276 240.938l-57.431 57.431 213.92 213.92-213.92 213.92 57.431 57.431 271.351-271.351z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMoreinfoCopy.defaultProps = {
  size: 18,
};

IconMoreinfoCopy = React.memo ? React.memo(IconMoreinfoCopy) : IconMoreinfoCopy;

export default IconMoreinfoCopy;

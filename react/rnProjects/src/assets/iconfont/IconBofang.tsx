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

let IconBofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M452.278827 723.638141c-2.558265 0-5.526877-0.566912-7.910157-1.749854-5.840008-2.866281-9.942443-8.798387-9.942443-15.313777l0-356.673375c0-6.515391 4.102435-12.447497 9.942443-15.313777 5.840008-2.899026 13.011338-2.149966 18.160615 1.816369l230.449579 178.328501c4.174066 3.232624 6.664793 8.215102 6.664793 13.497409 0 5.282307-2.416026 10.264784-6.590092 13.497409L462.714504 720.071919C459.665051 722.42143 455.987289 723.638141 452.278827 723.638141zM468.195332 384.693546l0 287.088554 185.41899-143.552463L468.195332 384.693546z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBofang.defaultProps = {
  size: 18,
};

IconBofang = React.memo ? React.memo(IconBofang) : IconBofang;

export default IconBofang;

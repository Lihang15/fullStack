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

let IconOA: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1536 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0v1024h1536V0H0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M476.16 481.28v220.16c0 29.53728-7.5264 71.22432 9.69728 96.9984C515.47136 842.76736 609.1008 824.32 655.36 824.32c18.03264 0 48.79872 5.69856 60.52352-11.86816C726.33344 796.78976 721.92 770.47808 721.92 752.64v-143.36c17.44896 0 44.60032-4.8896 59.81184 5.26336 15.6416 10.43456 11.86304 34.92864 11.86816 51.05664l0.00512 107.52c0.07168 13.80864-1.64864 32.19968 8.91392 42.99264C821.26848 835.26144 881.29536 824.32 906.24 824.32c35.64032 0 88.28416 9.86112 116.33152-17.37728 24.18176-23.48544 15.19104-60.22656 15.2832-90.14272 0.2304-76.76416 1.50528-153.5744 1.50528-230.4 16.82432 16.82432 34.47296 40.67328 56.31488 50.97984 10.37824 4.89472 27.05408 5.64224 32.47616-6.91712 5.30432-12.29824-5.8368-24.46336-13.29664-32.8192-20.6848-23.168-43.17696-44.672-64.36352-67.36384-55.61856-59.56096-113.1008-118.41536-166.83008-179.59936-32.05632-36.5056-68.096-82.58048-120.7808-86.33856-39.97184-2.85184-70.58432 24.3712-97.28 50.71872-48.91648 48.27136-94.73024 100.08064-142.10048 149.92384-35.2256 37.0688-72.66816 72.41216-105.90208 111.17568-10.752 12.53376-32.08192 27.79648-32.08192 45.98272 0 18.59584 20.6848 21.6832 34.3296 15.23712C444.0576 525.93152 457.50784 499.14368 476.16 481.28z"
        fill={getIconColor(color, 1, '#FE6869')}
      />
      <Path
        d="M711.68 174.08l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 2, '#FEA9AA')}
      />
      <Path
        d="M802.13504 175.78496c-2.2784 2.2784 3.12832 1.9968 3.40992 1.71008 2.2784-2.2784-3.12832-1.9968-3.40992-1.71008z"
        fill={getIconColor(color, 3, '#FEE0E0')}
      />
      <Path
        d="M699.73504 180.90496c-2.2784 2.2784 3.12832 1.9968 3.40992 1.71008 2.2784-2.2784-3.12832-1.9968-3.40992-1.71008z"
        fill={getIconColor(color, 4, '#FFD1D1')}
      />
      <Path
        d="M691.2 184.32l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 5, '#FFBABB')}
      />
      <Path
        d="M680.96 194.56l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 6, '#FFBDBD')}
      />
      <Path
        d="M829.44 194.56l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 7, '#FDC2BD')}
      />
      <Path
        d="M675.84 199.68l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 8, '#FFC3C3')}
      />
      <Path
        d="M834.56 199.68l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 9, '#FDC9C5')}
      />
      <Path
        d="M670.72 204.8l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 10, '#FEB8B8')}
      />
      <Path
        d="M650.24 225.28l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 11, '#FFBABB')}
      />
      <Path
        d="M645.12 230.4l5.12 5.12-5.12-5.12m-5.12 5.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 12, '#FFBDBD')}
      />
      <Path
        d="M634.88 240.64l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 13, '#FFBABB')}
      />
      <Path
        d="M629.76 245.76l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 14, '#FFBDBD')}
      />
      <Path
        d="M624.64 250.88l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 15, '#FFC1C1')}
      />
      <Path
        d="M619.52 256l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 16, '#FFBDBD')}
      />
      <Path
        d="M885.76 256l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 17, '#FCB7B1')}
      />
      <Path
        d="M890.88 261.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 18, '#FEADAD')}
      />
      <Path
        d="M609.28 266.24v10.24c8.3712-2.7904 7.4496-1.8688 10.24-10.24h-10.24z"
        fill={getIconColor(color, 19, '#FE9493')}
      />
      <Path
        d="M896 266.24l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 20, '#FCB7B1')}
      />
      <Path
        d="M604.16 276.48l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 21, '#FEA6A6')}
      />
      <Path
        d="M599.04 281.6l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 22, '#FDADAB')}
      />
      <Path
        d="M918.18496 285.01504c-0.2816 0.2816-0.56832 5.6832 1.71008 3.40992 0.2816-0.2816 0.56832-5.6832-1.71008-3.40992z"
        fill={getIconColor(color, 23, '#FBD1CD')}
      />
      <Path
        d="M593.92 286.72l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 24, '#FEB5B5')}
      />
      <Path
        d="M588.8 291.84l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 25, '#FFB3B3')}
      />
      <Path
        d="M583.68 296.96l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 26, '#FEB1B1')}
      />
      <Path
        d="M578.56 302.08l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 27, '#FFB3B3')}
      />
      <Path
        d="M573.44 307.2l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 28, '#FEB1B1')}
      />
      <Path
        d="M568.32 312.32l5.12 5.12-5.12-5.12m-5.12 5.12l5.12 5.12-5.12-5.12m-5.12 5.12l5.12 5.12-5.12-5.12m-5.12 5.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 29, '#FEADAD')}
      />
      <Path
        d="M547.84 332.8l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 30, '#FEA9AA')}
      />
      <Path
        d="M964.26496 336.21504c-0.2816 0.2816-0.56832 5.6832 1.71008 3.40992 0.2816-0.2816 0.56832-5.6832-1.71008-3.40992z"
        fill={getIconColor(color, 31, '#FAAEA9')}
      />
      <Path
        d="M542.72 337.92l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 32, '#FFB3B3')}
      />
      <Path
        d="M539.30496 346.45504c-0.2816 0.2816-0.56832 5.6832 1.71008 3.40992 0.2816-0.2816 0.56832-5.6832-1.71008-3.40992z"
        fill={getIconColor(color, 33, '#FC928B')}
      />
      <Path
        d="M532.48 353.28l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 34, '#FEA9AA')}
      />
      <Path
        d="M983.04 358.4l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 35, '#FBC6C1')}
      />
      <Path
        d="M517.12 363.52l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 36, '#FFB3B3')}
      />
      <Path
        d="M512 373.76l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 37, '#FEA6A6')}
      />
      <Path
        d="M998.4 373.76l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 38, '#FFC8C8')}
      />
      <Path
        d="M506.88 378.88l5.12 5.12-5.12-5.12m-5.12 5.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 39, '#FEA0A0')}
      />
      <Path
        d="M1008.64 384l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 40, '#FFC6C5')}
      />
      <Path
        d="M496.64 389.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 41, '#FEA0A0')}
      />
      <Path
        d="M1013.76 389.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 42, '#FFC6C5')}
      />
      <Path
        d="M491.52 394.24l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 43, '#FE9D9E')}
      />
      <Path
        d="M486.4 399.36l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 44, '#FEA0A0')}
      />
      <Path
        d="M1025.70496 402.77504c-0.2816 0.2816-0.56832 5.6832 1.71008 3.40992 0.2816-0.2816 0.56832-5.6832-1.71008-3.40992z"
        fill={getIconColor(color, 45, '#F8A8A1')}
      />
      <Path
        d="M481.28 404.48l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 46, '#FEA0A0')}
      />
      <Path
        d="M476.16 409.6l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 47, '#FEA6A6')}
      />
      <Path
        d="M471.04 414.72l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 48, '#FEB8B8')}
      />
      <Path
        d="M467.62496 423.25504c-0.2816 0.2816-0.5632 5.6832 1.71008 3.40992 0.2816-0.2816 0.5632-5.6832-1.71008-3.40992z"
        fill={getIconColor(color, 49, '#FC928B')}
      />
      <Path
        d="M1039.36 419.84l5.12 5.12-5.12-5.12m5.12 5.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 50, '#FBBBB6')}
      />
      <Path
        d="M1049.6 430.08l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 51, '#FEBFB9')}
      />
      <Path
        d="M450.56 435.2l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 52, '#FEA6A6')}
      />
      <Path
        d="M1054.72 435.2l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 53, '#FFC3C3')}
      />
      <Path
        d="M445.44 440.32l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 54, '#FEA6A6')}
      />
      <Path
        d="M1059.84 440.32l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 55, '#FFC6C5')}
      />
      <Path
        d="M1064.96 445.44l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 56, '#FFBDBD')}
      />
      <Path
        d="M1070.08 450.56l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 57, '#FEB8B8')}
      />
      <Path
        d="M1075.2 455.68l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 58, '#FFBDBD')}
      />
      <Path
        d="M1080.32 460.8l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 59, '#FFC1C1')}
      />
      <Path
        d="M1085.44 465.92l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 60, '#FFC3C3')}
      />
      <Path
        d="M1090.56 471.04l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 61, '#FFC8C8')}
      />
      <Path
        d="M414.72 476.16l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 62, '#FE9D9E')}
      />
      <Path
        d="M409.6 481.28l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 63, '#FEA0A0')}
      />
      <Path
        d="M469.33504 482.98496c-2.2784 2.2784 3.1232 1.9968 3.40992 1.71008 2.2784-2.2784-3.1232-1.9968-3.40992-1.71008z"
        fill={getIconColor(color, 64, '#FF888A')}
      />
      <Path
        d="M404.48 486.4l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 65, '#FEA9AA')}
      />
      <Path
        d="M465.92 486.4c8.6784 36.4544 5.12 75.36128 5.12 112.64v179.2c9.05728-21.5808 5.12-48.45568 5.12-71.68v-148.48c0-21.71392 7.16288-56.4736-10.24-71.68z"
        fill={getIconColor(color, 66, '#FAAAA5')}
      />
      <Path
        d="M1039.36 486.4v184.32c15.43168-36.77184 4.95104-93.35808 5.12512-133.12 0.0768-17.90976 3.8912-35.60448-5.12512-51.2z"
        fill={getIconColor(color, 67, '#FFE9E9')}
      />
      <Path
        d="M1100.8 486.4l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 68, '#FAACA6')}
      />
      <Path
        d="M399.36 491.52l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 69, '#FEA6A6')}
      />
      <Path
        d="M460.8 491.52l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 70, '#FECBCB')}
      />
      <Path
        d="M1111.04 491.52l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 71, '#FFC3C3')}
      />
      <Path
        d="M394.24 496.64l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 72, '#FEB1B1')}
      />
      <Path
        d="M1049.6 496.64l5.12 5.12-5.12-5.12m66.56 0l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 73, '#FFBABB')}
      />
      <Path
        d="M389.12 501.76l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 74, '#FEA9AA')}
      />
      <Path
        d="M1054.72 501.76l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 75, '#FFBABB')}
      />
      <Path
        d="M1059.84 506.88l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 76, '#FFBDBD')}
      />
      <Path
        d="M1121.28 506.88l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 77, '#FDADAB')}
      />
      <Path
        d="M1070.08 517.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 78, '#FBC6C1')}
      />
      <Path
        d="M1075.2 522.24l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 79, '#FECBCB')}
      />
      <Path
        d="M1080.32 527.36l5.12 5.12-5.12-5.12m5.12 5.12l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 80, '#FEB8B8')}
      />
      <Path
        d="M1090.56 537.6l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 81, '#FEB5B5')}
      />
      <Path
        d="M1121.28 537.6l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 82, '#FFC3C3')}
      />
      <Path
        d="M399.36 542.72c6.38976 3.5072 7.92576 3.83488 15.36 5.12-6.38976-3.5072-7.92576-3.83488-15.36-5.12z"
        fill={getIconColor(color, 83, '#FE9797')}
      />
      <Path
        d="M1095.68 542.72c7.71072 3.49696 11.8528 4.22912 20.48 5.12-7.71072-3.49696-11.8528-4.22912-20.48-5.12z"
        fill={getIconColor(color, 84, '#FE9494')}
      />
      <Path
        d="M721.92 609.28c20.27008 8.50432 44.73344 5.12 66.56 5.12-20.27008-8.50432-44.73344-5.12-66.56-5.12z"
        fill={getIconColor(color, 85, '#FEA6A6')}
      />
      <Path
        d="M721.92 614.4v194.56c7.37792-17.5872 5.12-37.36576 5.12-56.32 0-40.99584 10.7776-100.352-5.12-138.24z"
        fill={getIconColor(color, 86, '#FFC8C8')}
      />
      <Path
        d="M788.48 614.4v194.56c7.37792-17.5872 5.12-37.36576 5.12-56.32 0-40.99584 10.7776-100.352-5.12-138.24z"
        fill={getIconColor(color, 87, '#FE9494')}
      />
      <Path
        d="M1034.24 670.72v15.36c3.56352-7.95648 3.56352-7.40352 0-15.36z"
        fill={getIconColor(color, 88, '#F8A29B')}
      />
      <Path
        d="M1039.36 686.08v25.6c4.2496-10.39872 4.2496-15.20128 0-25.6z"
        fill={getIconColor(color, 89, '#FFE9E9')}
      />
      <Path
        d="M1034.24 711.68v15.36c3.56352-7.95648 3.56352-7.40352 0-15.36z"
        fill={getIconColor(color, 90, '#F8A29B')}
      />
      <Path
        d="M1039.36 727.04v56.32c7.32672-17.4592 7.32672-38.8608 0-56.32z"
        fill={getIconColor(color, 91, '#FFE9E9')}
      />
      <Path
        d="M472.74496 781.65504c-0.2816 0.2816-0.5632 5.68832 1.71008 3.40992 0.2816-0.2816 0.5632-5.68832-1.71008-3.40992z"
        fill={getIconColor(color, 92, '#FDC9C5')}
      />
      <Path
        d="M1034.24 783.36v15.36c3.56352-7.95648 3.56352-7.40352 0-15.36z"
        fill={getIconColor(color, 93, '#FEDDDD')}
      />
      <Path
        d="M477.86496 791.89504c-0.2816 0.2816-0.5632 5.68832 1.71008 3.40992 0.2816-0.2816 0.5632-5.68832-1.71008-3.40992z"
        fill={getIconColor(color, 94, '#FDCDCB')}
      />
      <Path
        d="M482.98496 797.01504c-0.2816 0.2816-0.5632 5.68832 1.71008 3.40992 0.2816-0.2816 0.5632-5.68832-1.71008-3.40992z"
        fill={getIconColor(color, 95, '#FE9D9E')}
      />
      <Path
        d="M486.4 803.84l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 96, '#FBBBB6')}
      />
      <Path
        d="M716.8 808.96l5.12 5.12-5.12-5.12z"
        fill={getIconColor(color, 97, '#FE9D9E')}
      />
      <Path
        d="M795.30496 812.37504c-0.2816 0.2816-0.56832 5.68832 1.71008 3.40992 0.2816-0.2816 0.56832-5.68832-1.71008-3.40992z"
        fill={getIconColor(color, 98, '#FD8585')}
      />
      <Path
        d="M797.01504 820.90496c-2.2784 2.2784 3.12832 1.99168 3.40992 1.71008 2.2784-2.2784-3.12832-1.99168-3.40992-1.71008z"
        fill={getIconColor(color, 99, '#FEDDDD')}
      />
    </Svg>
  );
};

IconOA.defaultProps = {
  size: 18,
};

IconOA = React.memo ? React.memo(IconOA) : IconOA;

export default IconOA;

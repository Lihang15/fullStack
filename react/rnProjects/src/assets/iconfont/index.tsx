/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconBofang from './IconBofang';
import IconBofang1 from './IconBofang1';
import IconYixianshi from './IconYixianshi';
import IconZanting from './IconZanting';
import IconHuanyipi from './IconHuanyipi';
import IconHuanyipi1 from './IconHuanyipi1';
import IconMoreinfoCopy from './IconMoreinfoCopy';
import IconXihuan from './IconXihuan';
import IconWode from './IconWode';
import IconWodedangxuan from './IconWodedangxuan';
import IconShoucang from './IconShoucang';
import IconFaxian from './IconFaxian';
import IconOA from './IconOA';
import IconBiaoqiankuozhanShouye151 from './IconBiaoqiankuozhanShouye151';

export type IconNames = 'icon-bofang' | 'icon-bofang1' | 'icon-yixianshi-' | 'icon-zanting' | 'icon-huanyipi' | 'icon-huanyipi1' | 'icon-moreinfo-copy' | 'icon-xihuan' | 'icon-wode' | 'icon-wodedangxuan' | 'icon-shoucang' | 'icon-faxian' | 'icon-oA' | 'icon-biaoqiankuozhan_shouye-151';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-bofang':
      return <IconBofang key="1" {...rest} />;
    case 'icon-bofang1':
      return <IconBofang1 key="2" {...rest} />;
    case 'icon-yixianshi-':
      return <IconYixianshi key="3" {...rest} />;
    case 'icon-zanting':
      return <IconZanting key="4" {...rest} />;
    case 'icon-huanyipi':
      return <IconHuanyipi key="5" {...rest} />;
    case 'icon-huanyipi1':
      return <IconHuanyipi1 key="6" {...rest} />;
    case 'icon-moreinfo-copy':
      return <IconMoreinfoCopy key="7" {...rest} />;
    case 'icon-xihuan':
      return <IconXihuan key="8" {...rest} />;
    case 'icon-wode':
      return <IconWode key="9" {...rest} />;
    case 'icon-wodedangxuan':
      return <IconWodedangxuan key="10" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="11" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="12" {...rest} />;
    case 'icon-oA':
      return <IconOA key="13" {...rest} />;
    case 'icon-biaoqiankuozhan_shouye-151':
      return <IconBiaoqiankuozhanShouye151 key="14" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

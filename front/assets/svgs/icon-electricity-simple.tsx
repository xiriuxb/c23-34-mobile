import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export type IconFullSvgProps = SvgProps & {
    size?: number
}

const IconElectricitySimple = ({ size = 125, color, ...rest }: IconFullSvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...rest}
  >
    <Path
      d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z"
      fill={color}
    />
  </Svg>
);
export default IconElectricitySimple;

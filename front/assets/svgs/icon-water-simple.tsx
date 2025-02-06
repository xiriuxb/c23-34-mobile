import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export type IconFullSvgProps = SvgProps & {
    size?: number
}

const IconWaterSimple = ({ size = 125, color, ...rest }: IconFullSvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...rest}
  >
    <Path
      d="M8 19.5C5.78333 19.5 3.89583 18.7333 2.3375 17.2C0.779167 15.6667 0 13.8 0 11.6C0 10.55 0.204167 9.54583 0.6125 8.5875C1.02083 7.62917 1.6 6.78333 2.35 6.05L8 0.5L13.65 6.05C14.4 6.78333 14.9792 7.62917 15.3875 8.5875C15.7958 9.54583 16 10.55 16 11.6C16 13.8 15.2208 15.6667 13.6625 17.2C12.1042 18.7333 10.2167 19.5 8 19.5ZM8 17.5C9.66667 17.5 11.0833 16.9292 12.25 15.7875C13.4167 14.6458 14 13.25 14 11.6C14 10.8167 13.85 10.0708 13.55 9.3625C13.25 8.65417 12.8167 8.03333 12.25 7.5L8 3.3L3.75 7.5C3.18333 8.03333 2.75 8.65417 2.45 9.3625C2.15 10.0708 2 10.8167 2 11.6C2 13.25 2.58333 14.6458 3.75 15.7875C4.91667 16.9292 6.33333 17.5 8 17.5Z"
      fill={color}
    />
  </Svg>
);
export default IconWaterSimple;

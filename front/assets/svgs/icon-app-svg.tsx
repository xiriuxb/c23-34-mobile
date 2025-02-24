import { ColorsBase } from "@/constants/Colors";
import { ForwardedRef, forwardRef, RefObject } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export type IconAppSvgProps = SvgProps & {
  size?: number;
  top?: number;
  left?: number;
  colorPaths?: {
    light: string;
    normal: string;
    dark: string;
  };
};

export const IconAppSvg = ({
  size = 64,
  top = 0,
  left = 0,
  colorPaths = {
    light: ColorsBase.cyan200,
    normal: ColorsBase.cyan400,
    dark: ColorsBase.cyan600,
  },
  ...rest
}: IconAppSvgProps, ref: ForwardedRef<any>) => {

  return (
    <Svg ref={ref} width={size} height={size} viewBox="0 0 64 64" fill="none" {...rest}>
      <Path d="M0 16C0 7.16344 7.16344 0 16 0H32V42H0V16Z" fill={colorPaths.normal} />
      <Path
        d="M32 0H43C54.598 0 64 9.40202 64 21C64 32.598 54.598 42 43 42H32V0Z"
        fill={colorPaths.dark}
      />
      <Path
        d="M0 42H32V48C32 56.8366 24.8366 64 16 64C7.16344 64 0 56.8366 0 48V42Z"
        fill={colorPaths.light}
      />
    </Svg>
  );
};
export const ForwardedAppIcon = forwardRef(IconAppSvg);

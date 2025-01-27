import { scaleHeight, scaleMin, scaleWidth } from "@/constants/Scale";
import Svg, { Path, SvgProps } from "react-native-svg";
export type IconFullSvgProps = SvgProps & {
  width?: number;
  height?: number;
};

const IconPlane = ({ width = 119, height = 98, ...rest }: IconFullSvgProps) => (
  <Svg
    width={width * scaleMin}
    height={height * scaleMin}
    viewBox="0 0 119 98"
    fill="none"
    {...rest}
  >
    <Path
      d="M109.98 45.3015C113.282 46.6616 113.282 51.3384 109.98 52.6985L8.43753 94.5246C5.21486 95.8521 1.95426 92.7096 3.16187 89.4402L17.587 50.3859C17.9173 49.4915 17.9173 48.5085 17.587 47.6141L3.16188 8.55985C1.95427 5.29038 5.21487 2.14795 8.43755 3.47538L109.98 45.3015Z"
      fill="#66C9C2"
    />
    <Path
      d="M22.3245 49L109.459 49L19.7905 60.0881C18.2867 60.274 17.1304 58.7854 17.6825 57.3744L20.462 50.2712C20.7621 49.5045 21.5012 49 22.3245 49Z"
      fill="#008B80"
    />
  </Svg>
);
export default IconPlane;

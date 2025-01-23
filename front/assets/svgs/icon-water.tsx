import { scaleHeight, scaleWidth } from "@/constants/Scale";
import Svg, { Rect, Mask, G, Path, SvgProps } from "react-native-svg";
export type IconFullSvgProps = SvgProps & {
  size?: number;
};

const IconWater = ({ size = 125, ...rest }: IconFullSvgProps) => (
  <Svg
    width={size * scaleWidth}
    height={size * scaleHeight}
    viewBox="0 0 124 124"
    fill="none"
    {...rest}
  >
    <Rect width={124} height={124} rx={31} fill="#66C9C2" />
    <Mask
      id="mask0_413_1789"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={31}
      y={31}
      width={62}
      height={62}
    >
      <Rect x={31} y={31} width={62} height={62} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_413_1789)">
      <Path
        d="M62.0007 86.5416C56.2743 86.5416 51.3982 84.561 47.3725 80.5999C43.3468 76.6388 41.334 71.8166 41.334 66.1333C41.334 63.4208 41.8614 60.8267 42.9163 58.351C43.9711 55.8753 45.4673 53.6902 47.4048 51.7958L62.0007 37.4583L76.5965 51.7958C78.534 53.6902 80.0302 55.8753 81.085 58.351C82.1399 60.8267 82.6673 63.4208 82.6673 66.1333C82.6673 71.8166 80.6545 76.6388 76.6288 80.5999C72.6031 84.561 67.727 86.5416 62.0007 86.5416ZM62.0007 81.3749C66.3062 81.3749 69.9659 79.9003 72.9798 76.951C75.9937 74.0017 77.5006 70.3958 77.5006 66.1333C77.5006 64.1096 77.1132 62.1829 76.3382 60.353C75.5632 58.5232 74.4437 56.9194 72.9798 55.5416L62.0007 44.6916L51.0215 55.5416C49.5576 56.9194 48.4382 58.5232 47.6632 60.353C46.8882 62.1829 46.5007 64.1096 46.5007 66.1333C46.5007 70.3958 48.0076 74.0017 51.0215 76.951C54.0354 79.9003 57.6951 81.3749 62.0007 81.3749Z"
        fill="#CCEDEB"
      />
    </G>
  </Svg>
);
export default IconWater;

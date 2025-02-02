import { scaleHeight, scaleWidth } from '@/constants/Scale'
import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg'
export type IconFullSvgProps = SvgProps & {
	size?: number
}

const IconArrow = ({ size = 125, color, ...rest }: IconFullSvgProps) => (
	<Svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
		<Path
			d='M12.175 9.17383L6.575 14.7738L8 16.1738L16 8.17383L8 0.173828L6.575 1.57383L12.175 7.17383H0V9.17383H12.175Z'
			fill='#F7F7F7'
		/>
	</Svg>
)
export default IconArrow

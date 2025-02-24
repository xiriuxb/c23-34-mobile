import { scaleHeight, scaleWidth } from '@/constants/Scale'
import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg'
export type IconFullSvgProps = SvgProps & {
	size?: number
	bgColor?: string
	scale?: number
}

const IconElectricity = ({
	size = 125,
	bgColor,
	color,
	scale = 1.1,
	...rest
}: IconFullSvgProps) => {
	const translate = (125 * (1 - scale)) / 2
	return (
		<Svg
			width={size * scaleWidth}
			height={size * scaleHeight}
			viewBox='0 0 124 124'
			fill='none'
			{...rest}
		>
			<Rect width={124} height={124} rx={31} fill={bgColor} />
			<Mask
				id='mask0_413_1793'
				style={{
					maskType: 'alpha',
				}}
				maskUnits='userSpaceOnUse'
				x={31}
				y={31}
				width={62}
				height={62}
			>
				<Rect x={31} y={31} width={62} height={62} fill='#D9D9D9' />
			</Mask>
			<G
				mask='url(#mask0_413_1793)'
				transform={`translate(${translate}, ${translate}) scale(${scale})`}
			>
				<Path
					d='M58.2543 78.0167L71.6231 62H61.2897L63.1627 47.3396L51.2147 64.5834H60.1918L58.2543 78.0167ZM51.6668 87.8334L54.2502 69.75H41.3335L64.5835 36.1667H69.7502L67.1668 56.8334H82.6668L56.8335 87.8334H51.6668Z'
					fill={color}
				/>
			</G>
		</Svg>
	)
}
export default IconElectricity

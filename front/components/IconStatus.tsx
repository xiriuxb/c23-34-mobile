import { Colors, ColorsBase } from '@/constants/Colors'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { View } from 'react-native'
import { ThemedText } from './ThemedText'

interface IconStateProps {
	status: string
}

const IconStatus: React.FC<IconStateProps> = ({ status }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor:
					status == 'Atrasado'
						? ColorsBase.red400
						: status === 'Pendiente'
						? ColorsBase.yellow400
						: ColorsBase.cyan100,
				height: '50%',
				paddingHorizontal: 10,
				borderRadius: 10,
				gap: 5,
			}}
		>
			{status === 'Atrasado' ? (
				<MaterialIcons
					name={'hourglass-disabled'}
					color={'white'}
					size={15}
				/>
			) : status === 'Pendiente' ? (
				<MaterialCommunityIcons
					name={'dots-horizontal-circle-outline'}
					size={15}
				/>
			) : (
				<MaterialCommunityIcons
					name='check-circle-outline'
					color={'white'}
					size={15}
				/>
			)}
			<ThemedText
				style={{
					color:
						status === 'Atrasado' || status === 'Pagado'
							? Colors.light.background
							: Colors.light.text,
				}}
			>
				{status}
			</ThemedText>
		</View>
	)
}

export default memo(IconStatus)

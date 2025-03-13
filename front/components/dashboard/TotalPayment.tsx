import { Colors, ColorsBase } from '@/constants/Colors'
import React, { memo } from 'react'
import { Button, Card, Divider } from 'react-native-paper'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { ThemedText } from '../ThemedText'
import CardDebt from './CardDebt'
import AddServiceNavButton from './AddServiceNavButton'


//Based on /components/TotalPayment by GioPati

interface PaymentProps {
	progress: number
}
const TotalPayment: React.FC<PaymentProps> = () => {
	const theme = useColorScheme() ?? 'light'
	return (
		<>
			<CardDebt progress={0.5} />
			<AddServiceNavButton />
			<Button
				mode='contained'
				buttonColor='#333333'
				style={{
					width: '100%',
					height: 48,
					borderRadius: 32,
				}}
			>
				<ThemedText
					type='default'
					style={{
						color:
							theme !== 'light'
								? Colors.light.text
								: Colors.dark.text,
					}}
				>
					Ir a pagar  ${'205.587'}
				</ThemedText>
			</Button>
			<Divider
				style={{ backgroundColor: ColorsBase.cyan400, height: 1 }}
			/>
		</>
	)
}
export default memo(TotalPayment)

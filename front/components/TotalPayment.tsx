import { Colors } from '@/constants/Colors'
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, ProgressBar } from 'react-native-paper'

interface PaymentProps {
	progress: number
}

const TotalPayment: React.FC<PaymentProps> = ({ progress }) => {
	return (
		<Card mode='contained' style={styles.container}>
			<Card.Content>
				<Text style={{ color: Colors.light.primary, fontSize: 16 }}>
					Total Restante
				</Text>
				<View style={styles.priceRestante}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 40,
							marginEnd: 10,
						}}
					>
						$ {185.013}
					</Text>
					<Text style={{ fontSize: 20 }}>ARS</Text>
				</View>
				<ProgressBar
					progress={progress}
					style={{
						backgroundColor:
							progress < 0.5
								? '#fc7b7b'
								: progress < 0.9
								? '#fff443'
								: Colors.light.primary,
					}}
					color={
						progress < 0.5
							? 'red'
							: progress < 0.8
							? 'orange'
							: Colors.light.primary
					}
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginVertical: 10,
					}}
				>
					<Text> {progress * 100} % Pagado</Text>
					<Text style={{ color: Colors.light.primary }}>
						$ 205.587
					</Text>
				</View>
				<View style={{ width: '100%', alignItems: 'flex-end' }}>
					<Button
						mode='contained'
						buttonColor='#333333'
						icon={'wallet-outline'}
						style={{ width: '55%' }}
						contentStyle={{ flexDirection: 'row-reverse', }}
					>
						Ir a pagar ${'205.587'}
					</Button>
				</View>
			</Card.Content>
		</Card>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		backgroundColor: Colors.light.background,
		borderWidth: 0.2,
	},
	priceRestante: {
		flexDirection: 'row',
		alignItems: 'baseline',
		alignSelf: 'flex-start',
		marginVertical: 7,
	},
})

export default memo(TotalPayment)

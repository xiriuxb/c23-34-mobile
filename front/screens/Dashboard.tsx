import React, { memo, useState } from 'react'
import AllCards from '@/components/AllCards'
import HeaderApp from '@/components/HeaderApp'
import ServicesClient from '@/components/ServicesClient'
import TotalPayment from '@/components/TotalPayment'
import { Colors } from '@/constants/Colors'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Dashboard = () => {
	const [totalDebt, setTotalDebt] = useState(0.1) // Total de la deuda (ejemplo inicial)
	const [pressCards, setPressCards] = useState(true)
	return (
		<View style={{ backgroundColor: '#ccedeb' }}>
			<HeaderApp />
			<TotalPayment progress={0.5} />
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginBottom: 10,
				}}
			>
				<Button
					style={{
						width: '48%',
						borderColor: pressCards
							? 'transparent'
							: Colors.light.primary,
					}}
					buttonColor={
						pressCards
							? Colors.light.primary
							: Colors.light.background
					}
					textColor={
						pressCards
							? Colors.light.background
							: Colors.light.primary
					}
					onPress={() => {
						setTotalDebt(0.5)
						setPressCards(true)
					}}
					mode={pressCards ? 'contained' : 'outlined'}
				>
					Servicios
				</Button>
				<Button
					style={{
						width: '48%',
						borderColor: pressCards
							? Colors.light.primary
							: 'transparent',
					}}
					buttonColor={
						pressCards
							? Colors.light.background
							: Colors.light.primary
					}
					textColor={
						pressCards
							? Colors.light.primary
							: Colors.light.background
					}
					mode='outlined'
					onPress={() => setPressCards(false)}
				>
					Mis Tarjetas
				</Button>
			</View>
			{pressCards ? <ServicesClient /> : <AllCards />}
		</View>
	)
}

export default memo(Dashboard)

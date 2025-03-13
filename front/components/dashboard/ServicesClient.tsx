import React, { memo } from 'react'
import { Colors, ColorsBase } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { Text, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-paper'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import IconWater from '@/assets/svgs/icon-water'
import IconElectricity from '@/assets/svgs/icon-electricity'
import IconFlame from '@/assets/svgs/icon-flame'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import IconStatus from '../IconStatus'
import ServicesIcons from '../ServicesIcons'

// based on /components/ServicesClient by GioPati
	/* 
 Data Example 
 */
 const data = [
	{
		type: 'Electricidad',
		Empresa: 'EDENOR',
		Client: '88698235',
		status: 'Atrasado',
		fechVen: '01/01/2025',
		totalPagar: '75.900',
	},
	{
		type: 'Agua',
		Empresa: 'EDENOR',
		Client: '88698235',
		status: 'Pendiente',
		fechVen: '01/01/2025',
		totalPagar: '75.900',
	},
	{
		type: 'Gas',
		Empresa: 'MetroGas',
		Client: '88698235',
		status: 'Pagado',
		fechVen: '01/01/2025',
		totalPagar: '75.900',
	},
	{
		type: 'Internet',
		Empresa: 'Movistar',
		Client: '88698235',
		status: 'Pagado',
		fechVen: '01/01/2025',
		totalPagar: '75.900',
	},
]

const ServicesClient = ({servicesList}:{servicesList?:any[]}) => {

	const theme = useColorScheme() ?? 'light'
	const insets = useSafeAreaInsets()
	return (
		<Animated.FlatList
			data={servicesList!== undefined?servicesList:data}
			ListEmptyComponent={() => (
				<ThemedView
					style={{
						backgroundColor: 'transparent',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<Icon
						source={'check-decagram-outline'}
						size={40}
						color={'#75C975'}
					/>
					<ThemedText
						type='title'
						style={{ color: ColorsBase.cyan400 }}
					>
						¡Parece que estas al dia!
					</ThemedText>
					<ThemedText
						type='default'
						style={{ color: ColorsBase.cyan400 }}
					>
						¿Tienes algún otro servicio que agregar?
					</ThemedText>
				</ThemedView>
			)}
			scrollEnabled
			keyboardShouldPersistTaps='handled'
			renderItem={({ item }) => (
				<Card
					mode='contained'
					style={{
						borderWidth: 0.2,
						borderColor: 'black',
						backgroundColor:
							theme === 'light'
								? Colors.light.background
								: Colors.dark.background,
						marginBottom: 16,
					}}
				>
					<Card.Content style={{ gap: 10 }}>
						<ThemedView
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
								}}
							>
								<ServicesIcons category={item.category.name}/>

								<ThemedView style={{ marginLeft: 10 }}>
									<ThemedText type='defaultSemiBold'>
										{item.category.name}
									</ThemedText>
									<ThemedText
										type='default'
										style={{
											color:
												item.category.name == 'Agua'
													? ColorsBase.blue400
													: item.type === 'Gas'
													? ColorsBase.red400
													: item.type === 'Internet'
													? '#834E9C'
													: ColorsBase.yellow400,
										}}
									>
										{item.name}
									</ThemedText>
								</ThemedView>
							</View>
							<IconStatus status={item.status} />
						</ThemedView>

						<ThemedText
							type='default'
							style={{
								color: ColorsBase.cyan500,
								backgroundColor: ColorsBase.cyan100
							}}
						>
							N° Cliente{' '}
							<ThemedText
								type='defaultSemiBold'
								style={{ color: ColorsBase.cyan500 }}
							>
								{item.registeredUsers[0].clienteId}
							</ThemedText>
							<MaterialCommunityIcons
								name='content-copy'
								size={18}
								color={ColorsBase.cyan500}
							/>
						</ThemedText>
						{/* </ThemedView> */}
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<ThemedText>Vencimiento</ThemedText>
							<ThemedText>{item.fechVen?item.fechVen:"30/02/2025"}</ThemedText>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<ThemedText>Total a pagar</ThemedText>
							<ThemedText> ARS $ {item.totalPagar?item.totalPagar:"75.900"}</ThemedText>
						</View>
						<View
							style={{
								justifyContent: 'center',
								gap: 10,
								alignSelf: 'center',
								width: '98%',
								marginTop: 10,
							}}
						>
							<Button
								mode='outlined'
								textColor={ColorsBase.cyan500}
								style={{
									borderColor: ColorsBase.cyan500,
									marginEnd: 10,
								}}
								onPress={() =>
									router.push(
										`/dashboard/home/payment/${item.Client}`
									)
								}
							>
								<ThemedText
									type='default'
									style={{ color: ColorsBase.cyan500 }}
								>
									Ver Detalles
								</ThemedText>
							</Button>
							<Button
								mode='contained'
								buttonColor={ColorsBase.cyan500}
							>
								<ThemedText
									type='default'
									style={{ color: Colors.light.background }}
								>
									Pagar ahora
								</ThemedText>
							</Button>
						</View>
					</Card.Content>
				</Card>
			)}
		/>
	)
}

export default memo(ServicesClient)

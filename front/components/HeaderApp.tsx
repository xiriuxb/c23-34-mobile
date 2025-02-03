import { Colors, ColorsBase } from '@/constants/Colors'
import React, { memo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Appbar, Avatar, Button, Card, IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import IconElectricity from '@/assets/svgs/icon-electricity'
import IconNotifications from '@/assets/svgs/icon-notifications'
import { useRouter } from 'expo-router'
import { ThemedText } from './ThemedText'

const HeaderApp = () => {
	const data = {
		nombre: 'Nombre Apellido',
	}
	const router = useRouter()
	const theme = useColorScheme() ?? 'light'
	return (
		<Card.Title
			title={<ThemedText type='subtitle'>{data.nombre}</ThemedText>}
			subtitle={
				<TouchableOpacity
					onPress={() =>
						router.push('/auth/(dashboard)/(tabs)/perfil')
					}
				>
					<ThemedText style={{ color: ColorsBase.cyan600 }}>
						Ver perfil
					</ThemedText>
				</TouchableOpacity>
			}
			style={[
				style.header_Container,
				{
					backgroundColor:
						theme === 'light' ? '#e4f5f4' : Colors.dark.background,
				},
			]}
			left={(props) => (
				<Avatar.Image
					{...props}
					size={32}
					source={require('../assets/images/IconPayFy.png')}
				/>
			)}
			right={(props) => (
				<TouchableOpacity
					onPress={() =>
						router.navigate(
							'/auth/(dashboard)/(tabs)/notifications'
						)
					}
				>
					<IconNotifications size={20} color={ColorsBase.cyan600} />

					<View style={style.badge} />
				</TouchableOpacity>
			)}
		/>
	)
}

const style = StyleSheet.create({
	header_Container: {
		borderRadius: 32,
		paddingHorizontal: 16,
		paddingVertical: 8,
		overflow: 'hidden',
		borderWidth: 0.5,
		borderColor: ColorsBase.cyan400,
	},
	badge: {
		position: 'absolute',
		top: -4,
		right: 2,
		backgroundColor: 'red',
		width: 10,
		height: 10,
		borderRadius: 5,
	},
})

export default memo(HeaderApp)

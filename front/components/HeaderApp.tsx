import { Colors } from '@/constants/Colors'
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'

const HeaderApp = () => {
	const data = {
		nombre: 'Giovanni Patiño',
	}

	return (
		<Appbar.Header style={style.header_Container}>
			<Avatar.Image
				size={45}
				style={{ marginRight: '8%' }}
				source={require('../assets/images/IconPayFy.png')}
			/>
			<Appbar.Content
				title={
					<View>
						<Text style={style.text_name}>{data.nombre}</Text>
						<Text>¡Bienvenido!</Text>
					</View>
				}
			/>
			<Appbar.Action icon='bell-outline' />
		</Appbar.Header>
	)
}

const style = StyleSheet.create({
	header_Container: {
		backgroundColor: Colors.light.background,
		borderWidth: 0.2,
		borderRadius: 20,
		paddingHorizontal: 10,
	},
	text_name: { fontWeight: 'bold', fontSize: 20, color: Colors.light.text },
})

export default memo(HeaderApp)

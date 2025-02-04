import React, { memo } from 'react'
import HeaderApp from '@/components/HeaderApp'
import IconStatus from '@/components/IconStatus'
import { ThemedText } from '@/components/ThemedText'
import { FlatList, ScrollView, View } from 'react-native'

const viewDetails = () => {
	return (
		<ScrollView>
			<HeaderApp />
			<ThemedText type='title'>Detalles del Servicio</ThemedText>
			<IconStatus status='Pagado' />
		</ScrollView>
	)
}

export default memo(viewDetails)

import { Colors } from '@/constants/Colors'
import Dashboard from '@/screens/Dashboard'
import { memo } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Animated from 'react-native-reanimated'

interface StyleProps {
	color: string
}

const BottomBar = () => {
	const Tab = createBottomTabNavigator()
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarActiveTintColor: Colors.light.primary,
					sceneStyle: { backgroundColor: 'transparent' },
					tabBarStyle: styles.barStyles,
					tabBarIcon: ({ focused }) => {
						const scale = focused ? 1.2 : 1
						return (
							<Animated.View
								style={{
									width: 50,
									height: 50,
									borderRadius: 25,
									backgroundColor: focused
										? Colors.light.primary
										: Colors.light.background,
									justifyContent: 'center',
									alignItems: 'center',
									transform: [{ scale }],
								}}
							>
								<Icon
									source={
										route.name === 'Home'
											? 'home'
											: route.name === 'History'
											? 'file-document-outline'
											: 'folder-plus-outline'
									}
									size={24}
									color={
										focused
											? Colors.light.background
											: Colors.light.primary
									}
								/>
							</Animated.View>
						)
					},
				})}
			>
				<Tab.Screen name='Home' component={Dashboard} />
				<Tab.Screen
					name='History'
					component={Dashboard}
					options={{
						tabBarItemStyle: { marginEnd: '15%' },
					}}
				/>
				<Tab.Screen
					name='Category'
					component={Dashboard}
					options={{
						tabBarLabel: 'Categorias',
						tabBarIcon: ({ color }: StyleProps) => (
							<Icon
								source='folder-plus-outline'
								color={color}
								size={30}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='Profile'
					component={Dashboard}
					options={{
						tabBarLabel: 'Perfil',
						tabBarIcon: ({ color }: StyleProps) => (
							<Icon
								source='account-circle-outline'
								color={color}
								size={30}
							/>
						),
					}}
				/>
			</Tab.Navigator>
			<TouchableOpacity
				style={styles.buttonPlus}
				onPress={() => console.log('Floating Button Pressed')}
			>
				<Icon source='plus' color={Colors.light.text} size={30} />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	barStyles: {
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
		height: 50,
	},
	buttonPlus: {
		position: 'absolute',
		bottom: '0.5%',
		alignSelf: 'center',
		borderWidth: 0.1,
		backgroundColor: Colors.light.background,
		borderRadius: 30,
		padding: 15,
		elevation: 5,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 5,
	},
})

export default memo(BottomBar)

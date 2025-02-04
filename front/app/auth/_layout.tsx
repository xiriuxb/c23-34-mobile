import { Stack } from 'expo-router'

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
			<Stack.Screen
				name='login'
				options={{ headerShown: false, title: 'Login' }}
			/>
			<Stack.Screen name='(register)' options={{ headerShown: false }} />
			<Stack.Screen
				name='(dashboard)'
				options={{ headerShown: false, animation: 'fade' }}
			/>
		</Stack>
	)
}

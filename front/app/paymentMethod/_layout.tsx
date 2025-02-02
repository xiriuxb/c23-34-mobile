import {Stack} from 'expo-router';

export default function PaymentMethodLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"  options={{title: "index" }}/>
        <Stack.Screen name="add" options={{ title: "add"}}/> 
        <Stack.Screen name="[card]" options={{ title: "Detalles de Tarjeta" }} />
    </Stack>
  );
}
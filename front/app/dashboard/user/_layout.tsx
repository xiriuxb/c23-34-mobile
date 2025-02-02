import { ThemedView } from "@/components/ThemedView";
import UserProfileHeader from "@/components/user/UserProfileHeader";
import { Stack } from "expo-router";

export default function Userlayout() {
  return (
    <ThemedView style={{paddingHorizontal:28, padding:20, height:"100%", width:"100%"}}>
      <UserProfileHeader handleBack={()=>{}} />
      <Stack>
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="personal-info" options={{ headerShown: false }} />
        <Stack.Screen name="support" options={{ headerShown: false }} />
      </Stack>
    </ThemedView>
  );
}

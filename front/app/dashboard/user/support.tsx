import authStyles from "@/components/auth/authStyles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

type Person = {
  name: string;
  role: string;
  social?: { name: string; link: string }[];
};
const team: Person[] = [
  {
    name: "Fabián Martínez",
    role: "UI/UX",
    social: [
      {
        name: "GitHub",
        link: "",
      },
    ],
  },
  {
    name: "Marcelo Alejandro",
    role: "Project Manager",
    social: [
      {
        name: "GitHub",
        link: "",
      },
    ],
  },
  {
    name: "Giovanni Patino",
    role: "Dev",
    social: [
      {
        name: "GitHub",
        link: "",
      },
    ],
  },
  {
    name: "Yoel Frias",
    role: "Dev",
    social: [
      {
        name: "GitHub",
        link: "",
      },
    ],
  },
  {
    name: "Jorge Trujillo",
    role: "Dev",
    social: [
      {
        name: "GitHub",
        link: "",
      },
    ],
  },
  {
    name: "Paula Badillo",
    role: "Team Leader",
  },
];

export default function SupportView() {
  return (
    <ThemedView>
      <View style={authStyles.regTitleContainer}>
        <IconSymbol name="person.2" color={ColorsBase.cyan500} />
        <ThemedText type="subtitle">Equipo</ThemedText>
      </View>
      <FlatList
        data={team}
        style={{ height: "100%" }}
        renderItem={({ item }: { item: Person }) => (
          <PersonCard person={item} />
        )}
        scrollEnabled
      ></FlatList>
    </ThemedView>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <ThemedView
      style={{
        borderColor: ColorsBase.neutral200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        flexDirection: "row",
        gap: 20,
        flex: 1,
      }}
    >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View>
        <ThemedText type="defaultSemiBold">{person.name}</ThemedText>
        <View
          style={{
            borderRadius: 50,
            gap: 9,
          }}
        >
          <ThemedText
            style={{
              alignSelf: "flex-start",
              backgroundColor: ColorsBase.blue200,
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical:3,
              marginVertical:5
            }}
          >
            {person.role}
          </ThemedText>
        </View>
        {person.social &&
          person.social.map((pers) => (
            <TouchableOpacity>
              <IconSymbol name="gift" color={"black"} />
            </TouchableOpacity>
          ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

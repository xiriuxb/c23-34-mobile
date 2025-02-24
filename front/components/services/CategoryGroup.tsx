import { apiGetServicesByCategory } from "@/api/providers.service";
import { useEffect, useState } from "react";
import { ThemedText } from "../ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { CompanySkeleton } from "./ServicesListSkeleton";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import IconElectricitySimple from "@/assets/svgs/icon-electricity-simple";
import IconFlameSimple from "@/assets/svgs/icon-flame-simple";
import IconWaterSimple from "@/assets/svgs/icon-water-simple";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export type ServiceCategoryT = {
  name: string;
  id: string;
};

export type ApiCompanyT = {
  serviceId: string;
  name: string;
};

export default function CategoryGroup({
  category,
}: {
  category: ServiceCategoryT;
}) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const { ok, data } = await apiGetServicesByCategory(category.id);
    if (ok) {
      setCompanies(data);
      setLoading(false);
    }
  };
  return (
    <View style={{ gap: 4 }}>
        <View style={{flexDirection:"row", gap:8}}>
        <IconCategorySelector catName={category.name}/>
      <ThemedText
        lightColor={ColorsBase.cyan500}
        style={{ fontWeight: 700, fontSize: 17 }}
      >
        {category.name}
      </ThemedText>

        </View>
      {loading ? (
        <View style={{ flexDirection: "row", gap: 12 }}>
          <CompanySkeleton />
          <CompanySkeleton />
          <CompanySkeleton />
        </View>
      ) : (
        <ScrollView
          horizontal
          style={{ paddingVertical: 15 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", gap: 8 }}
        >
          {companies.map((comp: ApiCompanyT) => {
            return <CompanyBadge key={comp.serviceId} company={comp} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}

function CompanyBadge({ company }: { company: ApiCompanyT }) {
  return (
    <TouchableOpacity onPress={()=>router.push(`/dashboard/home/services/add/${company.serviceId}?servName=${company.name}`)}
      style={{
        borderRadius: 24,
        borderWidth: 1,
        borderColor: ColorsBase.cyan300,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 16,
        paddingVertical: 4,
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          backgroundColor: ColorsBase.cyan200,
          borderRadius: 999,
        }}
      ></View>
      <Text>{company.name}</Text>
    </TouchableOpacity>
  );
}

function IconCategorySelector({catName}:{catName:string}) {
    if(catName === "Telefonía") return (<MaterialIcons name="phone" size={24} color={ColorsBase.cyan200}/>)
    if(catName === "Luz") return <IconElectricitySimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Gas") return <IconFlameSimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Agua") return <IconWaterSimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Medicina Prepaga") return <MaterialIcons name="medical-information" size={24} color={ColorsBase.cyan200}/>

}
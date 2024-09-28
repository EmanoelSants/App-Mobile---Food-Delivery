import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Mais Pedidos"
        label="Explorar mais"
        action={() => console.log("CLICOU NO EXPLORAR MAIS")}
        size="text-xl"
      />

      <TrendingFoods />

      <Section
        name="Famosos no DevFood"
        label="Explorar todos"
        action={() => console.log("CLICOU NO EXPLORAR TODOS")}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja Todos"
        action={() => console.log("CLICOU PARA VER TODOS")}
        size="text-xl"
      />

      <RestaurantVerticalList />
    </ScrollView>
  );
}

import { CustomDrawerContent } from "@/components/Common/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
        screenOptions={{
            headerShown: true
        }} 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          title: "Página Inicial",
          drawerLabel: "Home"
        }} />

      <Drawer.Screen
        name="carteira/index"
        options={{
          title: "Carteira do Usuário",
          drawerLabel: "Carteira"
        }} />

      <Drawer.Screen
        name="pacotes/index"
        options={{
          title: "Pacotes de viagem",
          drawerLabel: "Pacotes"
        }} />

      <Drawer.Screen
        name="perfil/index"
        options={{
          title: "Perfil do usuário",
          drawerLabel: "Perfil"
        }} />
    </Drawer>
  );
}

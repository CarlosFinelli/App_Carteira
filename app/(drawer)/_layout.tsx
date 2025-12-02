import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
        screenOptions={{
            headerShown: true
        }} 
    >

    </Drawer>
    // <Drawer
    //   screenOptions={{
    //     headerShown: true,
    //   }}
    // >
    //   {/* <Drawer.Screen
    //     name="home"
    //     options={{
    //       drawerLabel: "Início",
    //       title: "Página Inicial",
    //     }}
    //   />

    //   <Drawer.Screen
    //     name="carteira"
    //     options={{
    //       drawerLabel: "Carteira",
    //       title: "Carteira de Saldo",
    //     }}
    //   /> */}

    //   {/* <Drawer.Screen
    //     name="profile"
    //     options={{
    //       drawerLabel: "Perfil",
    //       title: "Seu Perfil",
    //     }}
    //   />

    //   <Drawer.Screen
    //     name="settings"
    //     options={{
    //       drawerLabel: "Configurações",
    //       title: "Configurações",
    //     }}
    //   /> */}
    // </Drawer>
  );
}

import { Text, View } from "react-native";
import Login from "./view/login/Login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login></Login>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

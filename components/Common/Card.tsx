// components/Common/Card.tsx
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export const Card: React.FC<Props> = ({ children, style = {} }) => {
  return (
    <View style={[styles.cardContainer, { maxHeight: 400 }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignSelf: "center",        // evita esticar para preencher o pai
    width: "90%",               // ocupa 90% da largura do dispositivo
    maxWidth: 420,              // limite para telas grandes
    padding: 18,
    borderRadius: 12,
    backgroundColor: "white",
    marginVertical: 10,
    // NÃO colocar flex: 1 aqui!
    // Sombra
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
});

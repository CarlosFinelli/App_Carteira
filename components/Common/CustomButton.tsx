import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native"

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

export const CustomButton: FC<ButtonProps> = ({title, onPress, style}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style]}
        activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // Cor de fundo do botão
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto horizontalmente
    justifyContent: 'center',
    marginVertical: 8,
    // Adicione sombra com 'elevation' (Android) e 'shadow' (iOS)
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});
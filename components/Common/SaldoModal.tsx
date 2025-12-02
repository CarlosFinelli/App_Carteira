import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

interface CadastroModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (dados: { valor: number }) => void; 
}

export default function CadastroModal({ visible, onClose, onSubmit }: CadastroModalProps) {
  const [valor, setValor] = useState('');

  const handleEnvio = () => {
    // Validação básica
    if (!valor) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const parsedValue = parseFloat(valor)

    onSubmit({ valor: parsedValue });

    setValor('');
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Realizar depósito</Text>

              <TextInput
                style={styles.input}
                placeholder="Valor para depósito (R$)"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
              />

              <View style={styles.buttonContainer}>
                <Button title="Depositar" onPress={handleEnvio} />
                <Button title="Cancelar" onPress={onClose} color="#999" />
              </View>

            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
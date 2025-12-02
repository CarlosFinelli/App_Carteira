// components/CustomDrawerContent.tsx

import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { removeToken } from '@/services/authStorage';


export function CustomDrawerContent(props: any) {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja fazer logout?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          onPress: async () => {
            await removeToken(); 
            router.replace('/login'); 
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* 2. Botão de Logout (Parte customizada) */}
      <View style={styles.bottomSection}>
        <Button 
          title="Sair (Logout)" 
          onPress={handleLogout} 
          color="#FF3B30"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
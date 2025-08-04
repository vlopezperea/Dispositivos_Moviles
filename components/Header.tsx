import { Image } from 'expo-image';
import React from 'react';
import { View } from "react-native";

export default function Componente() {
  return (
    <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', }}  >            
        <Image source={require('@/assets/images/banner2.jpg')} style={{width: 400, height: 100, padding: 40, margin:20}}/>
    </View>
  );
      
};
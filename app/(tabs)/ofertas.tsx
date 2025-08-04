import Header from '@/components/Header';
import Lista from '@/components/Lista';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';



export default function TabTwoScreen() {
  return (
    <View>
      <Header></Header>
      <ScrollView>       
            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Text style= {{fontSize: 28}}>Ofertas</Text>
              <Lista></Lista>
            </View>
      </ScrollView>
    </View>
      
  );
}
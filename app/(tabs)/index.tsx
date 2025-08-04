
import Header from '@/components/Header';
import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    
    <View>
      <Header></Header>
      <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', }}  >            
        <Image source={require('@/assets/images/entrada.jpg')} style={{width: 300, height:220, padding: 10, margin:50}}/>
      </View>

      <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 5}}  >            
        <Text>Los 3 Salames somos Claudio, Fernando y Charlie. Nos conocemos de chiquitos, desde la escuela primaria en República de México</Text>
        <Text>En plena pandemia decidimos reinventarnos y asociarnos en este nuevo emprendimiento</Text>
      </View>

      <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 5 }}  > 
      
            <Text style = {{fontSize : 18}}> Gral José Gervasio de Artigas 2021 </Text>
            <Text>Paternal</Text>
            <Text>CABA</Text>
            <Text>Lunes a sábados de 9:00 a 20:00</Text>
          
             <Text style= {{fontSize: 22}} >Mirá nuestras Ofertas</Text>
      </View>
      
     
    
    </View>
    
   
  );
}

/*const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
*/

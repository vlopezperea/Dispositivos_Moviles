import datos from '@/components/datos';
import { Image } from 'expo-image';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    },
  item: {
    padding: 10,
    fontSize: 12,
    height: 60,
    width: 250,    
  },
});
const Lista = () => {
   console.log(datos)
  
  return (
      
          <View style={styles.container}>
            <FlatList
              data = {datos}     
              renderItem={({item}) => (<View style={{ borderColor: 'gray', borderWidth: 1, padding: 20, }}>
                                                      
                                        <Image source= {{uri: item.imagen}} style={{width: 200, height: 200, padding: 40}}/>
                                        <Text style={styles.item}>{item.descripcion}</Text>
                                      </View>) }
            />
          </View>
     
  );
    
      
};
export default Lista

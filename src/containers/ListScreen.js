import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
function ListScreen({ navigation }) {
  const DATA = [
    {
      id: '1',name: 'ANDRESITO SEVILLA',surname: 'ROLDAN',age: '20',sex: 'HOMBRE'
    },
    {
      id: '2',
      name: 'JORGE',
      surname: 'DIAZ',
      age: '40',
      sex: 'HOMBRE'
    },
    {
      id: '3',
      name: 'MAQUEDA',
      surname: 'GARCIA',
      age: '31',
      sex: 'ELFO'
    }];
  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('listacompleta', { item })}>
          <Text style={{margin: 2, color:'black' }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
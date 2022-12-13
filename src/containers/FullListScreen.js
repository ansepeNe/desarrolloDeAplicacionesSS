import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
function FullListScreen({route}) {
    const { item } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color:'black'}}>{item.name}</Text>
        <Text style={{ color:'black'}}>{item.surname}</Text>
        <Text style={{ color:'black'}}>{item.age}</Text>
        <Text style={{ color:'black'}}>{item.sex}</Text>
      </View>
    );
  }
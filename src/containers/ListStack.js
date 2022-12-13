import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

function ListStack() {
    return (
      <Stack.Navigator initialRouteName="lista">
        <Stack.Screen name="lista" component={ListScreen} />
        <Stack.Screen name="listacompleta" component={FullListScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    );
  }
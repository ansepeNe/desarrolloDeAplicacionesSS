import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <View style={{margin:50, backgroundColor: 'red'}}>
        <Button onPress={() => navigation.navigate("Perfil",{userName:"Andres",edad:"20"})} title={'Ir a Perfil'}/>

      </View>
      
      <Button onPress={() => navigation.navigate("Configuracion")} title={'Ir a configuracion'}/>

    </View>
    
  );
}

function ProfileScreen({route}) {

  const{userName, edad}=route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Mi nombre es {userName}, y mi edad es {edad}</Text>
    </View>
  );
}

function ConfiguracionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configuracion Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{title: 'Mis detalles: '}}/>
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
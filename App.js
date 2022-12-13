import React, { useState } from "react";
import { Text, View,FlatList,StyleSheet,StatusBar,TouchableOpacity, Image, ScrollView, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();


  


const DATA = [ {id: '001',nombre: 'Antonio Muñiz',edad: 10,nacionalidad: 'España'},
  {id: '002',nombre: 'Federica Ortiz',edad: 45,nacionalidad: 'Francia'},
  {id: '003',nombre: 'Pedro Danta',edad: 31,nacionalidad: 'España'},
  {id: '004',nombre: 'Manuel Berral',edad: 25,nacionalidad: 'Portugal'},
  {id: '005',nombre: 'Alejandro Baena',edad: 56,nacionalidad: 'Alemania'},
  {id: '006',nombre: 'Luis Capitán',edad: 39,nacionalidad: 'España'}];



function HomeStack(){
return(

  <Stack.Navigator initialRouteName="List">
    <Stack.Screen name="Lista" component={ListScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Nombre" component={UsuariosScreen} options={{
          title: 'Nombres',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
  </Stack.Navigator>
  )
}


function ListScreen({ navigation }) {
  const regex = "^[0-9]+$";
  const [edad1,setEdad1] = useState(0);
    return (
      <View>
        <Text style={{textAlign:'center',paddingTop:30}}>Busca aqui tus Usuarios</Text>
        <View style={{flexDirection:"row",
                                  alignItems:'center',
                                  marginTop:20,
                                  marginBottom: 20,
                                  marginLeft:20,
                                  marginRight:20,
                                  borderWidth: 2,
                                  borderRadius: 20,
                                  padding: 10}}>

                                
                                <Text style={{marginLeft:20,marginRight:15,fontStyle:'italic',fontSize:18,fontWeight:'bold'}}>  Edad:</Text> 
                                
                                <TextInput style={{marginRight:20,borderColor:'grey',width:168}} 

                                        placeholder="Introduce la edad..."  
                                        onChangeText={(edad1) => setEdad1(edad1)}  
                                              
                                />
 
       </View>
                    <Button style={{borderRadius:20}}  

                      onPress={() =>  
                         
                        {
                                        if(!edad1.match(regex)){
                                            return Alert.alert('Introduce una Edad Valida','Intentelo de Nuevo')  
                                        }else{
                                          navigation.navigate('Nombre',{edad1})
                                      } }}    

                      title="Buscar"
                      />  
    </View>
    )
  }
  
const Item = ({nombre,edad,nacionalidad}) => (

  <View>
    <Text style={{color:"black",fontSize:15}}>{nombre}</Text>
    <Text style={{color:"blue",fontSize:15}}>{edad}</Text>
    <Text style={{color:"grey",fontSize:15}}>{nacionalidad}</Text>
    <Text></Text>

  </View>



)
function UsuariosScreen({route}){

  const {edad1} = route.params;
   
  const edadMostrar = DATA.filter(item=>item.edad < parseInt(edad1)) 

  const renderItem = ({ item }) => (<Item nombre={item.nombre} edad={item.edad} nacionalidad={item.nacionalidad} />)
 
  return(
  
    <View style={{textAlign:'center',paddingTop:30, alignItems:'center'}}>
      <Text>Tus Usuarios son los Siguientes:</Text>

                  <FlatList data={edadMostrar}
                  renderItem={renderItem}
                  //esto se pone porque si, para que vaya mas rapido XDD
                  keyExtractor={item =>item.id}/>
    </View>

  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function HistoriaScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
      
      <Text>Bienvenido a la Historia de los Dispositivos</Text>
      
      <Image 
      style={{width: 280,
        height: 320,
        borderWidth: 2,
        borderColor: "#2E4053",
        margin: 6,}}
      source={require("./img/movil2.jpg")}
      />
      <Text style={{padding:20}}>Sony Mobile Communications tenía instalaciones de investigación y desarrollo en Tokio, Japón, en Madrás, 
        India, en Lund, Suecia, en Pekín, China, y en Silicon Valley, Estados Unidos. Sony Mobile ha sido 
        el cuarto mayor fabricante de teléfonos inteligentes por cuota de mercado en el cuarto trimestre de 2012.
        En 2019, la compañía Sony confirmó que la división sería fusionada con la división Sony Video Sound Products Inc.1​ 
        Dicha fusión de hizo efectiva el 1 de abril de 2020.</Text>

  

      <Image 
      style={{width: 280,
        height: 320,
        borderWidth: 2,
        borderColor: "#2E4053",
        margin: 6,}}
      source={require("./img/movil1.jpg")}
      />
      <Text style={{padding:20}}>Samsung (en hangul, 삼성; en hanja, 三星) es un conglomerado de empresas multinacionales con sede en Seúl, Corea del Sur. 
        Se trata del mayor grupo empresarial surcoreano, con numerosas filiales que abarcan negocios como la electrónica de consumo, 
        tecnología, finanzas, aseguradoras, construcción, biotecnología y sector servicios.2​

        El grupo fue fundado en 1938 por el empresario Lee Byung-chul como una compañía de importación 
        y exportación de productos, que posteriormente, expandiría su negocio a otros sectores.
        Desde entonces se ha convertido en un referente del modelo económico de grandes conglomerados (chaebol) 
        que impulsó la transformación económica de Corea del Sur.2​3​ A partir de la década de 1990 se produjo su 
        expansión internacional a través de su rama de electrónica, en particular en electrodomésticos, teléfonos móviles 
        y semiconductores.</Text>

      </View>




    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'person-sharp'
                : 'person-outline';
            } else if (route.name === 'Historia') {
              iconName = focused ? 'information-sharp' : 'information-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaScreen} options={{
          title: 'Historia',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}

        />
        <Tab.Screen name="Home" component={HomeStack} options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}} />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}



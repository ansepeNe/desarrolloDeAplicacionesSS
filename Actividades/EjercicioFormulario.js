import React, {useState} from 'react';
import { Image, View,ScrollView,Switch, Text, TextInput, Button, Alert} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import DisplayMode from 'react-native/Libraries/ReactNative/DisplayMode';


export default function App (){


  const [isEnabled,setIsEnable] = useState(null);

  const [nombre,setNombre] = useState(0);
  const [apellidos,setApellidos] = useState(0);
  const [edad,setEdad] = useState(0);
  const [correo,setCorreo] = useState('');
  const [sexo,setSexo] = useState(0);
  const [texto,setTexto] = useState();
  const [imagen,setImagen] = useState();

  

  

  function miRegex (){
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!correo.match(regex)){
                return Alert.alert('Introduce Un Correo Valido...','Intentelo de Nuevo')  
        }else{
                return Alert.alert('Correo VALIDO!','Iniciando Sesion...')
        }

        
  }

  const mostrarDatos = () => {
        setTexto(
                <Text style={{marginTop:10,marginBottom:10,fontSize:15, textAlign: 'center',fontWeight: 'bold',}}>Mi nombre es  
                        <Text style={{ color: 'blue'}}> {nombre} {apellidos} </Text> 
                        con edad <Text style={{ color: 'red'}}>{edad} </Text>
                         y correo <Text style={{ color: 'blue'}}> {correo} </Text>
                         y sexo <Text style={{ color: 'blue'}}>{isEnabled? 'Mujer':'Hombre'} </Text>
                </Text>
        )
        setImagen(
                <Image 
              style={{width: 280,
                height: 200,
                borderWidth: 2,
                borderColor: "#2E4053",
                alignSelf:'center',
              
                borderRadius:50
                               
                }}
              source={require("./assets/cerdo3.jpg")}
        />
               

        )

        miRegex()
  }
  




  
  return(
    <ScrollView style={{ backgroundColor:'#D6EAF8'}}>
    
        
      <View style={{ flex: 1, justifyContent:'center', alignItems: "center", backgroundColor:'#D6EAF8' }}>

                  <View style={{flexDirection:"row",
                                alignItems:'center',
                                marginTop:20,
                                borderWidth: 2,
                                borderRadius: 20,
                                padding: 10}}>


                              <Text style={{marginLeft:10,marginRight:15,fontStyle:'italic',fontSize:18,fontWeight:'bold'}}>Nombre:</Text> 
                              
                              <TextInput style={{marginRight:20,borderColor:'grey',width:168}} 

                                      placeholder="Introduce tu Nombre..."  
                                      onChangeText={(nombre) => setNombre(nombre)}
                                      
                              />
                    


                  

                  </View>

                  <View style={{flexDirection:"row",
                                alignItems:'center',
                                marginTop:20,
                                borderWidth: 2,
                                borderRadius: 20,
                                padding: 10,}}>


                              <Text style={{marginLeft:10,marginRight:15,fontStyle:'italic',fontSize:18,fontWeight:'bold'}}>Apellidos:</Text> 

                              <TextInput style={{marginRight:20,borderColor:'grey',width:152}} 

                                      placeholder="Introduce tus Apellidos..."  
                                      onChangeText={(apellidos) => setApellidos(apellidos)} 
                              />


                  </View>

                  <View style={{flexDirection:"row",alignItems:'center',marginTop:20,borderWidth: 2,
                                borderRadius: 20,
                                padding: 10}}>


                              <Text style={{marginLeft:10,marginRight:15,fontStyle:'italic',fontSize:18,fontWeight:'bold'}}>Edad:</Text> 

                              <TextInput style={{marginRight:20,borderColor:'grey',width:144}} 

                                      placeholder="Introduce tu Edad..."  
                                      onChangeText={(edad) => setEdad(edad)} 
                              />


                  </View>


                  <View style={{flexDirection:"row",alignItems:'center',marginTop:20,borderWidth: 2,
                                borderRadius: 20,
                                padding: 10}}>

                              <Text style={{marginLeft:10,marginRight:15,fontStyle:'italic',fontSize:18,fontWeight:'bold'}}>Correo:</Text> 

                              <TextInput style={{marginRight:20,borderColor:'grey',width:130}} 

                                      placeholder="Introduce tu Correo..."  
                                      onChangeText={(correo) => setCorreo(correo)} 
                              />


                  </View>

                  <View style={{flexDirection:"row",alignItems:'center',marginTop:20}}>

                              <Text style={{marginLeft:10,marginRight:15,fontSize:20}}>Sexo:</Text> 

                              <Switch 
             
                                        //fondito del interruptor
                                        trackColor={{false:'#3498DB',true:'#F1948A'}}
                                        //el color de la bolita
                                        thumbColor={isEnabled?'#7F8C8D':'#7F8C8D'}
                                        onValueChange={() => setIsEnable(previousState => !previousState)}
                                        value={isEnabled}

                              />


                  </View>


                  <View style={{marginTop:20}}>

                          <Button style={{paddingTop:20}}  
                                
                            
                              onPress={mostrarDatos}
                              
                              title="   Enviar   "
                          />  
                          {texto} 
                          {imagen}
                          
                          
                        
                          


                  </View>


      
    </View>

    </ScrollView>
  )


 
  
}
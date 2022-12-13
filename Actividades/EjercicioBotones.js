import React, {useState} from 'react';
import { Alert,Text,Image,TextInput, View, Button } from 'react-native';

//ESTO ES EL MAIN
export default function App (){

  //ESTO ES UN METODO
  const nombreChill = (primero, segundo) => {
    return primero + " " + segundo;
  }


  const [edad,setEdad] = useState(0);

  function edades(){

    if(edad < 18){

          return "Eres un pargela"

    }

    if(edad <= 19 || edad == 18){

          return "Que buena edad!"
    
      }else{

          return "BOMBA CHILL SEXO"

    }

  }

  function onPressButton() {  
    Alert.alert('Tu edad es... ' + edad, edades(edad))  
  }  

  return(
    <View style={{ flex: 1, justifyContent:'center', alignItems: "center" }}>

        <Text style={{paddingBottom:40, fontSize:17}}>Hola mi nombre es <Text style={{ color: 'blue'}}>{nombreChill("Andrés","Cabañas")}</Text></Text> 

        <Text style={{fontSize:15, paddingBottom:20}}>Escribe Tu Edad:</Text>
        
        <TextInput style={{borderColor:'grey',borderWidth:2,width:250}} 


          placeholder="Introduce tu Edad..."  
          onChangeText={(edad) => setEdad(edad)}  
          
        
        />
        <Text style={{paddingBottom:10}}></Text>

        <Button style={{paddingTop:20, borderRadius:20}}  

            onPress={onPressButton}  
            title="       Finalizar       "
        />  


       

    

    </View>


  )

  

 
  const [count,setCount] = useState(10);
  const [count10,setCount10] = useState(10);
 
  
}
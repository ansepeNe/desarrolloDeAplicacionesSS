import React from 'react';

import {

  View,

  Text,

  FlatList

} from 'react-native';



import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function App(){



  const DATA = [

    { name: 'andresito',
    surname: 'sevilla',
    phone: 123456789,
    icon:'rocket'
    },

    { name: 'jorge',
    surname: 'diaz',
    phone: 2222123456786,
    icon:'apple'

    },];


  const printElement = ({item}) => {

      return(

        <View>

            <Text>{item.name}, {item.surname}</Text> 
            <Icon name={item.icon}></Icon>

        </View>

      )

    }



  return(

        <FlatList

          data={DATA}

          renderItem = {printElement}

       

        />

    )



}
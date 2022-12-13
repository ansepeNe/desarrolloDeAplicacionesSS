import React from'react';
import{ Text,  View,  FlatList } 
from'react-native';

export default function App()  {
        const DATA = [{id: '1',title: 'Primer elemento',},
                {id: '2',title: 'Segundo  elemento',},
                {id: '3',title: 'Tercer  elemento',},
                {id: '4',title: 'cuarto  elemento',},
                {id: '5',title: 'quinto  elemento',},
                {id: '6',title: 'sexto  elemento',},
                {id: '7',title: 'sexto  elemento',},
                {id: '8',title: 'octavo  elemento',},
                {id: '9',title: 'noveno  elemento',},
                {id: '10',title: 'T10  elemento',}];

const renderItem  =  ({ item }) =>(

                <View>
                        <Text>{item.title},{item.id}</Text>

                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>
                        <Text>aaa</Text>

                </View>
);

return(
        <View>
                <FlatList data={DATA}
                renderItem={renderItem}
                //esto se pone porque si, para que vaya mas rapido XDD
                keyExtractor={item =>item.id}/>


               


        </View>
)}
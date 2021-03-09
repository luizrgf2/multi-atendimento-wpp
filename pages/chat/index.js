import { useState } from 'react';
const AsyncStorage = require('@react-native-async-storage/async-storage').default
const React = require('react');
const {Text,TouchableOpacity,Image,TextInput,FlatList,View,Alert} = require('react-native')
const style = require('./styles').default
const io = require('socket.io-client')
const socket = io('http://357ee1dad8fe.ngrok.io',{
    reconnectionDelayMax:10000,
    reconnection:true,
    reconnectionAttempts:Infinity
})
const api = require('../../services/api')

const readdata = async ()=>{
    try{
        let data = await AsyncStorage.getItem('token')

        if(!data) return 'Não a dados para ler'

        return data


    }catch(e){
        return e
    }
}
var update = 0
const Chat = (props)=>{

    const [data,setData] = useState({message:[]})



    socket.on('msg',c=>{
        if(c.userid == props.userid){

            setData(c.message)
            console.log(c.message)
        }

    })


    if(update ==0){
        readdata().then(v=>{
            console.log(v)
            api.mensagem(v,props.userid).then(value=>{
    
                
                setData(value.message)
                update=1
        })
    
        })
    }

    const renderitem=({item})=>{


        return(
            <Text style={{color:'#FFF'}}>
                {item}
            </Text>
        )


    }

    return(

        <View style={[style.container_chat]}>
            <FlatList data={data} renderItem={renderitem}>
            
            </FlatList>
        </View>


    )


}
const TextIn = (props)=>{

    return(
        <View style={[style.container_input]}>
            <TextInput placeholder='Mensagem' style={[style.input_modificado]}> 

            </TextInput>
            <TouchableOpacity onPress={()=>{

               Alert.alert(props.red,props.nome)

            }}>
                <Image source={require('../../assets/send.png')} style={[style.button_image]}></Image>
            </TouchableOpacity>
        </View>
    )

}
const App = ({route,navigation})=>{


    const {conversas,userid,nome,red} = route.params
    
    navigation.setOptions({title:nome+'-'+red})

    return(
        <View style={[style.constainer_principal]}>
            <Chat userid={userid}></Chat>
            <TextIn nome={nome} red={red}></TextIn>
        </View>
    )


}

export default App

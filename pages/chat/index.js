import { useState } from 'react';
const AsyncStorage = require('@react-native-async-storage/async-storage').default
const React = require('react');
const {Text,TouchableOpacity,Image,TextInput,FlatList,View,Alert} = require('react-native')
const style = require('./styles').default
const io = require('socket.io-client')
const socket = io('http://c75fc34afabf.ngrok.io',{
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
    var texto = undefined // variavel vai gauradar o texto da mensagem
    var comparador = false // variavel responsavel por comparar uma mensagem se e do cliete ou se é do app


    socket.on('msg',c=>{ // verifica se a nova mensagens eviadas pelo cliete
        console.log('oi')
        if(c.userid == props.userid){

            setData(c.message)
            console.log(c.message)
        }

    })


    if(update == 0){
        readdata().then(v=>{ // pega o token guardado dentro do app para fazer a requisiçao inicial e pegar as mensagens
            console.log(v)
            api.mensagem(v,props.userid).then(value=>{
    
                
                setData(value.message)
                update=1
        })
    
        })
    }

    const renderitem=({item})=>{ //componente responsavel por renderizar a mesagem na tela

        let estado = 'flex-start'
        let color = '#00c2ff'

        texto = item.client //vai tentar pegar uma mensagem enviada pelo cliente
        estado = 'flex-start'
        
        if(!texto){
 
            texto = item.app // vai tentar pegar uam mensagem enviada pelo atendente ressrce direto do app
            estado = 'flex-end'
            color = '#fc0335'
            
        }
        
        


        return(
            <View style={[style.container_message,{alignItems:estado}]}>
                <Text style={[style.text_size,{color:color}]}>
                    {texto}
                </Text>
            </View>
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


    const [text,setText] = useState('')

    return(
        <View style={[style.container_input]}>
            <TextInput placeholder='Mensagem' style={[style.input_modificado]} onChangeText={v=>setText(v)}> 

            </TextInput>
            <TouchableOpacity onPress={async()=>{

                const token = await readdata()

                let teste = await api.salvar_msg(token,props.userid,text)

                console.log(teste)


            }}>
                <Image source={require('../../assets/send.png')} style={[style.button_image]}></Image>
            </TouchableOpacity>
        </View>
    )

}
const App = ({route,navigation})=>{


    const {conversas,userid,nome,red} = route.params
    
    update =0

    navigation.setOptions({title:nome+'-'+red})

    return(
        <View style={[style.constainer_principal]}>
            <Chat userid={userid}></Chat>
            <TextIn userid={userid} ></TextIn>
        </View>
    )


}

export default App

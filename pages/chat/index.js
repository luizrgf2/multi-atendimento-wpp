import { useState } from 'react';
const AsyncStorage = require('@react-native-async-storage/async-storage').default
const React = require('react');
const {Text,TouchableOpacity,Image,TextInput,FlatList,View,Alert} = require('react-native')
const style = require('./styles').default
const io = require('socket.io-client')
const {StackActions} = require('@react-navigation/native')
const socket = io('http://34.95.217.130',{
    reconnectionDelayMax:10000,
    reconnection:true,
    reconnectionAttempts:Infinity
})
const api = require('../../services/api')




function apagar (navigation,userid){

    socket.emit('delete',{userid:userid})
    navigation.goBack()

}

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


            console.log('props.messagee')


            let lista_mensagens = []
                
            for(let i = 0;i<props.messagee.length;i++){

                lista_mensagens.push({client:props.messagee[i]})

            }
            
            for(let i = 0;i<c.message.length;i++){

                lista_mensagens.push(c.message[i])

            }


            setData(lista_mensagens)
        }

    })


    if(update == 0){
        readdata().then(v=>{ // pega o token guardado dentro do app para fazer a requisiçao inicial e pegar as mensagens
            api.mensagem(v,props.userid).then(value=>{
                
                let lista_mensagens = []
                
                for(let i = 0;i<props.messagee.length;i++){

                    lista_mensagens.push({client:props.messagee[i]})

                }
                
                for(let i = 0;i<value.message.length;i++){

                    lista_mensagens.push(value.message[i])

                }




                setData(lista_mensagens)
                update=1
        })
    
        })
    }

    const renderitem=({item})=>{ //componente responsavel por renderizar a mesagem na tela

        let estado = 'flex-start'
        let color = '#fff'

        texto = item.client //vai tentar pegar uma mensagem enviada pelo cliente
        estado = 'flex-start'
        
        if(!texto){
 
            texto = item.app // vai tentar pegar uam mensagem enviada pelo atendente ressrce direto do app
            estado = 'flex-end'
            color = '#fff'
            
        }
        
        


        return(
            <View style={[style.container_message,{alignItems:estado}]}>
                <View style={[style.container_text]}>
                    <Text style={[style.text_size,{color:color}]}>{texto}</Text>

                </View>
            </View>
        )


    }

    return(

        <View style={[style.container_chat]}>
            <FlatList data={data} renderItem={renderitem} initialScrollIndex={data.length -1}>
            
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

                await api.salvar_msg(token,props.userid,text)



            }}>
                <Image source={require('../../assets/send.png')} style={[style.button_image]}></Image>
            </TouchableOpacity>
        </View>
    )

}
const App = ({route,navigation})=>{


    const {conversas,userid,nome,red} = route.params
    
    update =0

    navigation.setOptions({title:nome+'-'+red, headerRight:()=>{


        return(
            <TouchableOpacity onPress={()=>{

                apagar(navigation,userid)


            }



            }>
                <View style={{padding:10}}>
                    <Text>
                        Apagar
                    </Text>
                </View>
            </TouchableOpacity>
        )


    }})




    return(
        <View style={[style.constainer_principal]}>
            <Chat userid={userid} messagee = {conversas}></Chat>
            <TextIn userid={userid} ></TextIn>
        </View>
    )


}

export default App

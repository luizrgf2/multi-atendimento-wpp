import { useState } from 'react'

const {FlatList,View,Image,Text,TouchableOpacity} = require('react-native')
const React =require('react')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const {NavigationContainer,StackActions} = require('@react-navigation/native')
const api = require('../../services/api')
const styles = require('./styles').default
const AsyncStorage = require('@react-native-async-storage/async-storage').default
const io = require('socket.io-client')
const socket = io('http://357ee1dad8fe.ngrok.io',{
    reconnectionDelayMax:10000,
    reconnection:true,
    reconnectionAttempts:Infinity
})




const readdata = async ()=>{
    try{
        let data = await AsyncStorage.getItem('token')

        if(!data) return 'Não a dados para ler'

        return data


    }catch(e){
        return 'Erro ler'
    }
}
const Item = (props)=>{

        return(
            <View style={[styles.item]}>
                <Image source={require('../../assets/user.png')} style={styles.user_logo}>

                </Image>

                <View>
                    <Text style={[styles.text_item]}>
                        {props.text}
                    </Text>
                    <Text style={[styles.text_nome]}>
                        {props.nome}
                    </Text>
                </View>
            </View>
        )


}
var update = 0
function Lista(props){


    const[data,setData] = useState([{red:''}])

    
    if(update == 0){
            update = 1
        
            readdata().then(v=>{
                
                api.clientes(v).then(value=>[

                    setData(value)

                ])
        
            })
    }
    
            
    socket.on('change',change=>{

        setData(change)

    })

    const renderItem = ({item})=>{

        return(

            <TouchableOpacity onPress={()=>{

                props.nav.navigate('Chat',{
                    conversas:[],
                    userid:item.userid,
                    nome:item.nome,
                    red:item.red
                })

            }}>
                <Item text={item.red} nome={item.nome}></Item>
            </TouchableOpacity>

        )

    }



    return(




            <FlatList data={data} renderItem={renderItem} >

            </FlatList>



    )


}

const App =({navigation})=>{



    return(

        <View style={styles.container_pricipal}>
            <Lista nav={navigation}>

            </Lista>
        </View>
    )


}

export default App
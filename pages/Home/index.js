import { useState } from 'react'

const {FlatList,View,Image,Text,TouchableOpacity} = require('react-native')
const React =require('react')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const {NavigationContainer,StackActions} = require('@react-navigation/native')
const api = require('../../services/api')
const styles = require('./styles').default
const AsyncStorage = require('@react-native-async-storage/async-storage').default
const io = require('socket.io-client')
const socket = io('http://bdbd19a90107.ngrok.io',{
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

                <Text style={[styles.text_item]}>
                    {props.text}
                </Text>
            </View>
        )


}



function Lista(props){

    

    const[data,setData] = useState([{red:''}])

    
    readdata().then(v=>{

        fetch('http://bdbd19a90107.ngrok.io/auth/clientes',
        {
            headers:{
                'authorization':v

            },
            method:'GET'
        }
            

        ).then(res=>res.json()).then(res=>{


            
            setTimeout(()=>{
                setData(res)
                console.log(res)
                
            },3000)

        })



    })
    
            
    socket.on('change',change=>{

        setData(change)

    })

    const renderItem = ({item})=>{

        return(

            <TouchableOpacity onPress={()=>{


                let Action = StackActions.push('Chat',item)
                props.nav.dispatch(Action)



            }}>
                <Item text={item.red}></Item>
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
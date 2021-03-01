import { useState } from 'react'

const {FlatList,View,Image,Text} = require('react-native')
const React =require('react')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const {NavigationContainer,CommonActions} = require('@react-navigation/native')
const api = require('../../services/api')
const styles = require('./styles').default
const AsyncStorage = require('@react-native-async-storage/async-storage').default


const readdata = async ()=>{
    try{
        let data = await AsyncStorage.getItem('token')

        if(!data) return 'Não a dados para ler'

        return data


    }catch(e){
        return 'Erro ler'
    }
}



const Item = ()=>{

        return(
            <View style={[styles.item]}>
                <Image source={require('../../assets/user.png')}>

                </Image>
            </View>
        )


}



function Lista(){

    

    const[data,setData] = useState([{red:''}])

    
    readdata().then(v=>{

        fetch('http://db0fd1e5ceec.ngrok.io/auth/clientes',
        {
            headers:{
                'authorization':v

            },
            method:'GET'
        }
            

        ).then(res=>res.json()).then(res=>{


            setData(res)
            console.log(res)
            
        })

    })
    

    const renderItem = ({item})=>{

        return(
        <Text>{item.red}</Text>
        )

    }



    return(


        <View>


            <FlatList data={data} renderItem={renderItem}>

            </FlatList>

        </View>


    )


}




const App =()=>{



    return(

        <View>
            <Lista>

            </Lista>
        </View>
    )


}

export default App
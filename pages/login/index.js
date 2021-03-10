import { useRef, useState  } from 'react'
import { Verificardor } from '../../services/api'

const React = require('react')
const {View,Text,Button,TouchableOpacity,Animated,KeyboardAvoidingView,Keyboard,TextInput,Image, Alert, Platform} = require('react-native')
const styles = require('./styles').styles
const styles_default = require('../../styles/styles_default').default
const Auth = require('../../services/api').Auth
const {CommonActions,StackActions} = require('@react-navigation/native')
const  AsyncStorage = require('@react-native-async-storage/async-storage').default

const storedata = async  value=>{

    try{
        await AsyncStorage.setItem('token',value)
        return 'Sucesso'
    }catch(e){
        return e
    }

}
const readdata = async ()=>{
    try{
        let data = await AsyncStorage.getItem('token')

        if(!data) return 'Não a dados para ler'

        return data


    }catch{
        return 'Erro ler'
    }
}
const Form = ({navigation})=>{



    const position = useRef(new Animated.ValueXY({x:0,y:300})).current
    const opacidade = useRef(new Animated.Value(0)).current
    const [email,setEmail] = useState('')
    const [password,setSenha] = useState('')

    Animated.parallel(
        [
            Animated.spring(position.y,{

                toValue: 0,
                bounciness:20,
                speed:4
        
        
            }),
            Animated.timing(opacidade,{
    
    
                toValue:1,
                delay:1000,
                duration:2000
    
    
            })
        ]

    ).start()



    return(

        <KeyboardAvoidingView style={styles_default.container_pricipal}>
            
            <Animated.View style={{opacity:opacidade}}>
                <Image source={require('../../assets/resarce_logo.png')} style={{width:200,height:60}}></Image>
            </Animated.View>

            <Animated.View style={[styles_default.container_form,{transform:[{translateY:position.y}]}]}>

                <TextInput style={[styles_default.input]} autoCorrect={false} placeholder='E-mail' onChangeText={value=>setEmail(value)}></TextInput>
                <TextInput style={[styles_default.input]} autoCorrect={false} placeholder='Senha' secureTextEntry={true} onChangeText={value=>setSenha(value)}></TextInput>
                <TouchableOpacity style={[styles_default.button]} onPress={async ()=>{
                        const response = await Auth(email,password)
                        

                        
                        if(Platform.OS === 'web'){
                            alert(response[0].message)
                        }
                        else{
                            Alert.alert('Atenção',response[0].message)

                        }

                        
                        
                        if(response[1] === 200){

                            
                            
                            await storedata(response[0].token)

                            let Action = StackActions.replace('Home',response[0].user.area)
                        
                            navigation.dispatch(Action)
                        }


                }}>
                    <Text style={[styles_default.text_button]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10}} onPress={()=> navigation.navigate('Register')}>
                    <Text style={styles.text_button_register}>
                        Registrar sua conta!
                    </Text>
                </TouchableOpacity>



            </Animated.View>
        </KeyboardAvoidingView>




    )




}


export default  Form
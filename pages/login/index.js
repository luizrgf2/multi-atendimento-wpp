import { useRef, useState } from 'react'

const React = require('react')
const {View,Text,Button,TouchableOpacity,Animated,KeyboardAvoidingView,Keyboard,TextInput,Image, Alert} = require('react-native')
const styles = require('./styles').styles
const styles_default = require('../../styles/styles_default').default
const Auth = require('../../services/api').Auth
const {CommonActions} = require('@react-navigation/native')



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
                        

                        
                        Alert.alert('Atenção',response[0])



                        if(response[1] === 200){
                            navigation.navigate('Home')
                            let Action = CommonActions.reset({
                                index:0,
                                routes:[
                                    {name:'Home'}
                                ],
                                
                            })
                        
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
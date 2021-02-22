import { useRef, useState } from 'react'
const React = require('react')
const {View,KeyboardAvoidingView,TouchableOpacity,Text,TextInput,Animated,ImageBackground,Image,Alert} = require('react-native')
const styles = require('./styles').default
const styles_default = require('../../styles/styles_default').default
const Register = require('../../services/api').Register



const Form = ()=>{


    const mov_x =  useRef(new Animated.Value(70)).current
    const opacidade = useRef(new Animated.Value(0)).current
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    Animated.parallel([
        Animated.spring(mov_x,{

            toValue:0,
            speed:1,
            bounciness:20
    
    
        }),
        Animated.timing(opacidade,{
            delay:1000,
            duration:2000,
            toValue:1
        })
    ]).start()


    return(
        <KeyboardAvoidingView style = {[styles_default.container_pricipal,{justifyContent:'center' }]}>
                
                

                

                <Animated.View style={[styles.container_form,{transform:[
                    {translateY:mov_x}
                ],height:'90%'}]}>
                    
                    <Animated.Image source = {require('../../assets/register.png')} style={[styles.container_image,{opacity:opacidade}]}></Animated.Image>
                    <TextInput placeholder='E-mail' autoCorrect={false} style={[styles_default.input,{marginTop:1}]} onChangeText={value=>setEmail(value)}></TextInput>
                    <TextInput placeholder='senha' autoCorrect={false} style={[styles_default.input,{marginTop:1}]} secureTextEntry={true} onChangeText={value=>setSenha(value)}></TextInput>
                        <TouchableOpacity style={styles_default.button} onPress={async () => {
                            
                            const responsa = await Register(email,senha)
                            Alert.alert('Alerta',responsa)
                            
                        }}>
                            <Text style={styles_default.text_button}>Registrar</Text>
                        </TouchableOpacity>
                </Animated.View>
        </KeyboardAvoidingView>
    )
}

export default Form
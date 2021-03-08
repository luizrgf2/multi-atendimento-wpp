const React = require('react');
const {Text,TouchableOpacity,Image,TextInput,FlatList,View,Alert} = require('react-native')
const style = require('./styles').default


const Chat = ()=>{


    



    return(

        <View style={[style.container_chat]}>
            <FlatList>
            
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
    
    navigation.setParams({title:'oi'})

    return(
        <View style={[style.constainer_principal]}>
            <Chat></Chat>
            <TextIn nome={nome} red={red}></TextIn>
        </View>
    )


}

export default App

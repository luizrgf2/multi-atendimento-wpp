const React = require('react');
const {Text,TouchableOpacity,Image,TextInput,FlatList,View} = require('react-native')
const style = require('./styles').default


const Chat = ()=>{


    



    return(

        <View style={[style.container_chat]}>
            <FlatList>
            
            </FlatList>
        </View>


    )


}
const TextIn = ()=>{

    return(
        <View style={[style.container_input]}>
            <TextInput placeholder='Mensagem' style={[style.input_modificado]}> 

            </TextInput>
            <Image source={require('../../assets/send.png')} style={[style.button_image]}>
                
            </Image>
        </View>
    )

}
const App = ()=>{

    return(
        <View style={[style.constainer_principal]}>
            <Chat></Chat>
            <TextIn></TextIn>
        </View>
    )


}

export default App

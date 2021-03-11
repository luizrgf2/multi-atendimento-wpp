const {StyleSheet,Dimensions} = require('react-native');
const y = Dimensions.get('window').height
const x = Dimensions.get('window').width


const style = StyleSheet.create({

    constainer_principal: {
        flex: 1,
        backgroundColor:'#010f3e',
        
    },
    input_modificado:{
        backgroundColor:'#606361',
        width:x*0.85,
        height:y*0.08,
        color:'#fff',
        padding:10,
    },
    container_chat:{
        flex:1,
        backgroundColor:"#010f3e",
        alignItems:'center'
    },
    container_input:{
        flexDirection:'row',
        opacity:0.7
    },
    button_image:{
        width:x*0.1,
        height:y*0.08,
        marginLeft:x*0.02
        
    },
    container_message:{

        width:x*0.9,
        marginTop:y*0.03,
    },
    text_size:{
        fontWeight:'bold',
        fontSize:(y-x)*0.055,
        textAlign:'center'
    },
    container_text:{
        width:x*0.5,
        alignItems:'flex-start',
        backgroundColor:'#fff',
        opacity:0.4,
        borderRadius:7,
        padding:3,
    }


})

export default style
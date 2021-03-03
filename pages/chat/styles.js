const {StyleSheet,Dimensions} = require('react-native');
const y = Dimensions.get('window').height
const x = Dimensions.get('window').width


const style = StyleSheet.create({

    constainer_principal: {
        flex: 1,
        backgroundColor:'#000',
        
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
        backgroundColor:"#000"
    },
    container_input:{
        flexDirection:'row'
    },
    button_image:{
        width:x*0.1,
        height:y*0.08,
        marginLeft:x*0.02
        
    }


})

export default style
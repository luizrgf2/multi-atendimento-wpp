const {StyleSheet,Dimensions} = require('react-native')

const y = Dimensions.get('window').height
const x = Dimensions.get('window').width


const styles = StyleSheet.create({




    input:{


        backgroundColor:'#FFF',
        color:'#000',
        padding:5,
        borderColor:'black',
        borderRadius:7,
        borderWidth:1,
        marginBottom:10,
        height:y*0.07,
        width:"100%"


    },

    text_button_register:{

        color:'#ffffff',
        fontWeight:'bold'

    }



})

module.exports = {styles}
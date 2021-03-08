const {StyleSheet,Dimensions} = require('react-native')

const x = Dimensions.get('window').width
const y = Dimensions.get('window').height



const styles = StyleSheet.create({


    item:{
        flexDirection:'row',
        alignItems:'flex-start',
        backgroundColor:'#606361',
        marginTop:y*0.02
    },
    text_item:{

        color:'#fff',
        fontWeight:'bold',

    },container_pricipal:{

        flex:1,
        backgroundColor:'#000',



    },
    user_logo:{
        width: x*0.2,
        height:y*0.1
    },text_nome:{

        color:'#fff',

    }


})

export default styles
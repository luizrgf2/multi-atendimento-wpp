const {StyleSheet,Dimensions} = require('react-native')

const y = Dimensions.get('window').height
const x = Dimensions.get('window').width




const styles = StyleSheet.create({
    
    input:{
    
    
        backgroundColor:'#8e9094',
        color:'#FFF',
        padding:5,
        borderColor:'black',
        borderRadius:7,
        borderWidth:1,
        marginBottom:10,
        height:y*0.07,
        width:"100%"
    
    
    },
    button:{


        backgroundColor:'#00c2ff',
        borderRadius:7,
        height:y*0.05,
        width:"90%",
        justifyContent:'center',
        alignItems:'center'


    },
    text_button:{


        fontSize:18,
        fontWeight:'bold',
        color:'white'


    },
    container_pricipal:{

        backgroundColor:'#000',
        flex:1,
        alignItems:'center',
        justifyContent:'center'


    },
    container_form:{


        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:'40%',
        marginTop:'10%'

    },
})

export default styles


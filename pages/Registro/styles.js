const {StyleSheet,Dimensions} = require('react-native')

const x =  Dimensions.get('window').width
const y = Dimensions.get('window').height



const styles = StyleSheet.create({


    container_form:{


        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:'90%',
        marginBottom:'20%'

    },
    container_image:{
        justifyContent:"center",
        alignItems:'center',
        height: '30%',
        width:'50%',
    },


})


export default styles
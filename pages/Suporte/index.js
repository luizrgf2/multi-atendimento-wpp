const {View,Text} = require('react-native')
const React =require('react')
const styles = require('./styles').default
const style_global = require('../../styles/styles_default').default

const ViewPrincipal=()=>{


    return(

        <View style={[style_global.container_pricipal]}>
            <Text style={[style_global.text_button]}>
                Suporte
            </Text>
        </View>


    )



}

export default ViewPrincipal
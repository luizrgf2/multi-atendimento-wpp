const React = require('react')
const {NavigationContainer} = require('@react-navigation/native')
const {createStackNavigator} = require('@react-navigation/stack')
const Login = require('./pages/login/index').default
const Register = require('./pages/Registro/index').default
const Home = require('./pages/Home/index').default

const Stack =  createStackNavigator()

const App = ()=>{

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{title:'Tela Login',headerStyle:{backgroundColor:'#00c2ff'}}}></Stack.Screen>
                <Stack.Screen name='Register' component={Register} options={{title:'Tela de registro' , headerStyle:{backgroundColor:'#00c2ff'}}}></Stack.Screen>
                <Stack.Screen name='Home' component={Home} options={{title:'Home' , headerStyle:{backgroundColor:'#00c2ff'},headerLeft:false}}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App
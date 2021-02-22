const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const {NavigationContainer} = require('@react-navigation/native')

const Tab = createBottomTabNavigator()


const app =()=>{

    return(


        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Financeiro'></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>


    )


}
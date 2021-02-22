const {} = require('react-native')
const React =require('react')
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs')
const {NavigationContainer,CommonActions} = require('@react-navigation/native')
const SuportScreen = require('../Suporte/index').default
const FinanceiroScreen = require('../Financeiro/index').default


const Tab = createBottomTabNavigator()


const app =({navigation})=>{



    return(


            <Tab.Navigator initialRouteName='Financeiro'>
                <Tab.Screen name='Financeiro' component={FinanceiroScreen} options={{title:'Financeiro'}}></Tab.Screen>
                <Tab.Screen name='Suporte' component={SuportScreen} options={{title:'Suporte'}}></Tab.Screen>
            </Tab.Navigator>


    )


}

export default app
import React from "react"
import {
    Text,
    View,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import { store } from "./Redux/store"
import { Screens } from "./Config/Screens"
const Stack = createNativeStackNavigator()

function DetailsScreen () {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center", 
        }}>
            <Text>Details Screen</Text>
        </View>
    )
}
const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Home" 
                        options={{ 
                            headerShown:false, 
                        }} 
                        component={Screens.loginScreen} 
                    />
                    <Stack.Screen 
                        name="Community" 
                        options={{ 
                            headerShown:false, 
                        }}
                        component={Screens.communityScreen} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
 
export default App
 
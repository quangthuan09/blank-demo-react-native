import React from "react"
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const HomeScreen = ({ navigation })=> {
    return (
        <SafeAreaView style={{
            flex:1,
        }}>
            <View style={styles.container}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate("Details")}
                />
                <Text>Hello Word</Text>
            </View>
        </SafeAreaView>
    )
}

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
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
 
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        alignItems:"center",
        flex:1,
        justifyContent:"center",
    },
})
 
export default App
 
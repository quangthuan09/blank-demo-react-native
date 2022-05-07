import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native"
 
const App = () => {

    return (
        <SafeAreaView style={{
            flex:1,
        }}>
            <View style={styles.container}>
                <Text>Hello Word</Text>
            </View>
        </SafeAreaView>
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
 
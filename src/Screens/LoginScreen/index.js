import React from "react"
import {
    Button,
    SafeAreaView,
    StyleSheet, View,
} from "react-native"
import { T1 } from "../../Utils"
const LoginScreen = ({ navigation })=> {
    return (
        <SafeAreaView style={{
            flex:1,
        }}>
            <View style={styles.container}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate("Community")}
                />
                <T1>Hello Word</T1>
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
export default LoginScreen
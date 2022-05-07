import React from "react"
import {
    SafeAreaView,
    StyleSheet, View,
} from "react-native"
import { T1 } from "../../Utils"
const CommunityScreen = ({ navigation })=> {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center", 
        }}>
            <T1>Details Screen</T1>
        </View>
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
export default CommunityScreen
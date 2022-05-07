/* eslint-disable react/prop-types */
import React from "react"
import { View } from "react-native"

const Center = (props) => {
    const styleDefault = {
        justifyContent: "center",
        alignItems: "center",
        flex: props.flex || 1,
        flexDirection: props.flexDirection || "row",
    }
    return <View style={[styleDefault, props.style]}>{props.children}</View>
}

export default Center

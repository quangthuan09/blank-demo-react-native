/* eslint-disable react/prop-types */
import { StatusBar, View } from "react-native"
import React from "react"
import { Colors, screenStyles } from "../../config"
const Head = (props) => {
    const { style } = props
    return (
        <>
            <StatusBar translucent backgroundColor={Colors.white} />
            <View style={[screenStyles.headerWrapper, style]}>{props.children}</View>
        </>
    )
}
export default Head

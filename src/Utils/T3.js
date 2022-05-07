/* eslint-disable react/prop-types */
import React from "react"
import { Text } from "react-native"
import { fontScale } from "../../config/Normalize"

const T3 = (props) => {
    const { style } = props
    const defaultStyle = {
        ...fontScale.large,
        fontFamily: "Nunito-Regular",
    }

    return (
        <Text numberOfLines={props.numberOfLines || null} style={[defaultStyle, style]}>
            {props.children}
        </Text>
    )
}

export default T3

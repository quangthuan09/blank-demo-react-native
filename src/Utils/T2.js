/* eslint-disable react/prop-types */
import React from "react"
import { Text } from "react-native"
import { fontScale } from "../../config/Normalize"

const T2 = (props) => {
    const { style } = props
    const defaultStyle = {
        ...fontScale.xlarge,
        fontFamily: "Nunito-Regular",
    }

    return (
        <Text numberOfLines={props.numberOfLines || null} style={[defaultStyle, style]}>
            {props.children}
        </Text>
    )
}

export default T2

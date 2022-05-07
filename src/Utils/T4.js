/* eslint-disable react/prop-types */
import React from "react"
import { Text } from "react-native"
import { fontScale } from "../../config/Normalize"

const T4 = (props) => {
    const { style } = props
    const defaultStyle = {
        ...fontScale.medium,
    }

    return (
        <Text numberOfLines={props.numberOfLines || null} style={[defaultStyle, style]}>
            {props.children}
        </Text>
    )
}

export default T4

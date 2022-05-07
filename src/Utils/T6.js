/* eslint-disable react/prop-types */
import React from "react"
import { Text } from "react-native"
import { fontScale } from "../Config"

const T6 = (props) => {
    const { style } = props
    const defaultStyle = {
        ...fontScale.miniX,
    }

    return (
        <Text numberOfLines={props.numberOfLines || null} style={[defaultStyle, style]}>
            {props.children}
        </Text>
    )
}

export default T6

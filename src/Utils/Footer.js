/* eslint-disable react/prop-types */
import React from "react"
import { StyleSheet, View } from "react-native"
import { normalize } from "../../config"

const Footer = (props) => {
    const { style } = props
    return <View style={[styles.container, style]}>{props.children}</View>
}

const styles = StyleSheet.create({
    container: {
        height: normalize(50),
    },
})
export default Footer

import { Platform, StyleSheet } from "react-native"
import { ScreenHeight } from "react-native-elements/dist/helpers"
import normalize from "./Normalize"
import { getStatusBarHeight, ifIphoneX, isIOS } from "./ScaleDevice"

const ScreenStyles = StyleSheet.create({
    
    containerWrapper: {
        flex: 1,
        marginTop: ifIphoneX(44, 34),
    },
    headerWrapper: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: ifIphoneX(getStatusBarHeight() + 5, getStatusBarHeight() + 5),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: ifIphoneX(normalize(50), normalize(50)) + getStatusBarHeight(),
    },
    headerModalWrapper: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: isIOS
            ? ifIphoneX(getStatusBarHeight() + 5, getStatusBarHeight())
            : 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: isIOS
            ? ifIphoneX(normalize(50), normalize(46)) + getStatusBarHeight()
            : normalize(46),
    },
    shadow: {
        backgroundColor: "transparent",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    imageCosplay: {
        alignSelf: "flex-start",
        width: normalize(250),
        height: normalize(250),
    },
    imageTree :{
        width: normalize(250),
        height: normalize(250),
        position: "absolute",
    },
    backgroundImage : {
        position: "absolute",
        width:"100%",
        height:ScreenHeight,
    },
    checkIcon :{
        width: normalize(30),
        height: normalize(30),
    },
    questIconImage : {
        width: normalize(50),
        height: normalize(50),
    },
})

export default ScreenStyles

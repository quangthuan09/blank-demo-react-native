import { Dimensions, PixelRatio, StyleSheet } from "react-native"

const ratio = PixelRatio.get()
const { width, height } = Dimensions.get("window")

export const deviceWidth = width
export const deviceHeight = height

const Normalize = (size) => {
    if (ratio >= 2 && ratio < 3) {
        if (width < 360) 
            return size * 0.95
        if (height < 667) 
            return size
        if (height >= 667 && height <= 735) 
            return size * 1.15

        return size * 1.25
    } if (ratio >= 3 && ratio < 3.5) {
        if (width < 360) 
            return size
        if (height < 667) 
            return size * 1.15
        if (height >= 667 && height <= 735) 
            return size * 1.2

        return size * 1.27
    } if (ratio >= 3.5) {
        if (width < 360) 
            return size
        if (height < 667) 
            return size * 1.2
        if (height >= 667 && height <= 735) 
            return size * 1.25

        return size * 1.4
    }

    return size
}

export const create = (
    styles, 
    targetProperties = ["fontSize", "margin", "marginHorizontal", "marginVertical", "padding", "paddingVertical", "paddingHorizontal", "height"],
) => {
    const normalizedStyles = {}
    Object.keys(styles).forEach((key) => {
        normalizedStyles[key] = {}
        Object.keys(styles[key]).forEach((property) => {
            if (targetProperties.includes(property)) 
                normalizedStyles[key][property] = Normalize(styles[key][property])
            else 
                normalizedStyles[key][property] = styles[key][property]
      
        })
    })

    return StyleSheet.create(normalizedStyles)
}

export const widthPercentageToDP = (widthPercent) => {
    // const {width} = Dimensions.get('window');
    // Parse string percentage input and convert it to number.
    const elemWidth = typeof widthPercent === "number"
        ? widthPercent
        : parseFloat(widthPercent)

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((deviceWidth * elemWidth) / 100)
}

export const heightPercentageToDP = (heightPercent) => {
    // const {height} = Dimensions.get('window');
    // Parse string percentage input and convert it to number.
    const elemHeight = typeof heightPercent === "number"
        ? heightPercent
        : parseFloat(heightPercent)

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((deviceHeight * elemHeight) / 100)
}

export const fontScale = {
    mini: {
        fontSize: Normalize(8),
    },
    miniX: {
        fontSize: Normalize(10),
    },
    small: {
        fontSize: Normalize(13),
    },
    medium: {
        fontSize: Normalize(15),
    },
    large: {
        fontSize: Normalize(18),
    },
    xlarge: {
        fontSize: Normalize(23),
    },
    xxlarge: {
        fontSize: Normalize(27),
    },
}

export default Normalize

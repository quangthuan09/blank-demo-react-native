/* eslint-disable no-unused-vars */
import * as _ from "lodash"
import { languageTypes } from "../types"

const initState = {}

let languageReducer = (state = initState, action) => {
    switch (action.type) {
    case languageTypes.CHANGE_LANGUAGE: {
        const { data } = action?.payload
        return {
            data,
        }
    }
    default:
        return state
    }
}

export default languageReducer
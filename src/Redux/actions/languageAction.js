import { languageTypes } from "../types"

export const changeLanguage = language => {
    return {
        type: languageTypes.CHANGE_LANGUAGE,
        language,
    }
}
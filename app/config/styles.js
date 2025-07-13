import { Platform } from "react-native";

import colors from "./colors";

export default {
    colors,
    text: {
        color: colors.darkgray,
        ...Platform.select({
    ios: {
        fontSize: 20,
        fontFamily: "Avenir",
    },
    android: {
        fontSize: 18,
        fontFamily: "Roboto",
    }
    })
    }
}


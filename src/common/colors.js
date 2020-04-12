const colors = {
  _private: {
    primary: "#FF9C00",
    mediumGrey: "#686868",
    darkGrey: "#333333",
    yellow: "#FFC700",
    red: "#BB4300",
    orange: "#FF5C00",
    orangeMuted: "#F39400",
    offWhite: "#FFF7EB",
    white: "#FFFFFF",
    black: "#000000",
  },
}

colors.backgrounds = {
  dark1: colors._private.mediumGrey,
  dark2: colors._private.darkGrey,
  header: colors._private.primary,
  footer: colors._private.orange,
  light: colors._private.offWhite,
}

colors.typography = {
  dark: colors._private.black,
  light: colors._private.offWhite,
}

colors.actions = {
  main: colors._private.red,
}

export default colors

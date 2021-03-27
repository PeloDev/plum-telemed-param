import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF0000",
    secondary: "#0047AB",
    accent: "#FF0000",
    background: "#0047AB"
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Open Sans"
      }
    },
    Button: {
      baseStyle: {
        fontFamily: "Open Sans",
        _hover: { opacity: 0.8 },
        _active: { opacity: 0.7 },
        _focus: {},
      }
    }
  }
});

export default theme;

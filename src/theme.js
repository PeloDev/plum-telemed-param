import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF0000",
    secondary: "0047AB",
    accent: "#FF0000",
    background: "#0047AB"
  },
  components: {
    // Text: {
    //   baseStyle: {
    //     fontFamily: "Mulish"
    //   }
    // }
  }
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#0065a3"
    },
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
});

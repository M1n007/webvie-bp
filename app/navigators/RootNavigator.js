import { StackNavigator } from "react-navigation";

import IndexReact from "../index.js";
import AboutUs from "../component/aboutUs";
import SplashScreen from "../component/splashScreen";
import GopaySender from "../component/gopaySender";

const RootNavigator = StackNavigator({
  IndexReact: {
    screen: IndexReact,
    navigationOptions: {
      header: null
    }
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      header: null
    }
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  GopaySender: {
    screen: GopaySender,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;

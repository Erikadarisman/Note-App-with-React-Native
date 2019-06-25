import { createStackNavigator, createAppContainer } from "react-navigation";
import Note from "./Screen/Note";
import Home from "./Screen/Home";

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Details: Note
    },
    {
        initialRouteName: "Home"
    }
);


export default createAppContainer(AppNavigator);
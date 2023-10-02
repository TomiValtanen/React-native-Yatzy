import { Text, View } from "react-native";
import {Styles} from "../styles/Styles"


function Header(){
    return(
        <View style={Styles.header}>
            <Text style={Styles.title}>Dices game</Text>
        </View>
    )
}export default Header
import { Text, View } from "react-native";
import { Styles } from "../styles/Styles";




function Footer(){
    return(
        <View style={Styles.footer}>
            <Text style={Styles.author}>Tekijä: Tomi Valtanen</Text>
        </View>
    )
}

export default Footer
import { ImageBackground } from "react-native";
import { View } from "react-native";
import YatzyBackground from "../assets/yatzy_background.jpg"
import Background from "../assets/background.jpg"
import YatzyLogo from "../assets/Yatzy_logo11.png"
import { Image } from "react-native";
import { Button } from "react-native";
import { Styles } from "../styles/Styles";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";



function Splash({navigation}){
    return(
            <View style={Styles.splash}>
            <ImageBackground source={Background} style={{flex:1,justifyContent:"center",alignItems:"center",gap:60}} resizeMode="cover" blurRadius={1}>
                <Image source={YatzyLogo}/>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}> 
                    <Text style={Styles.splashText}>Pelaamaan</Text>
                    </TouchableOpacity>
            </ImageBackground>
           </View> 
        
    )
}

export default Splash
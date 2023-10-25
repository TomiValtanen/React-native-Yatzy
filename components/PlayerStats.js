import { View } from "react-native";
import { Text } from "react-native";
import { PlayerStatsStyles } from "../styles/Styles";






function PlayerStats({playerName,bonus,upperTotal,downTotal,handleBonus}){
 
    return(
       
        <View style={PlayerStatsStyles.container}>
        <View style={PlayerStatsStyles.textContainer}>

        <Text style={PlayerStatsStyles.text}>Pelaaja: {playerName}</Text>
        <Text style={PlayerStatsStyles.text}>Bonus:{bonus===0 ? ` Tarvitset ${handleBonus}`:bonus}</Text>
        </View>

        <View style={PlayerStatsStyles.textContainer}>

        <Text style={PlayerStatsStyles.text}>Yläosan pisteet: {upperTotal}</Text>
        <Text style={PlayerStatsStyles.text}>Alaosan pisteet: {downTotal}</Text>
        </View>
    
    
    
    </View>
    )
}

export default PlayerStats
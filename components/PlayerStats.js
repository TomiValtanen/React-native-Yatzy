import { View } from "react-native";
import { Text } from "react-native";
import { BONUS_POINTS_LIMIT } from "../constants/Game";





function PlayerStats({playerName,bonus,upperTotal,downTotal,handleBonus}){
 
    return(
       
        <View style={{flex:1,backgroundColor:"transparent",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-start",paddingLeft:5}}>

        <Text>Pelaaja: {playerName}</Text>
        <Text>Bonus:{bonus===0 ? `Tarvitset ${handleBonus}`:bonus}</Text>
        </View>

        <View style={{flex:1,justifyContent:"center",alignItems:"flex-start",paddingLeft:5}}>

        <Text>Yläosan pisteet: {upperTotal}</Text>
        <Text>Alaosan pisteet: {downTotal}</Text>
        </View>
    
    
    
    </View>
    )
}

export default PlayerStats
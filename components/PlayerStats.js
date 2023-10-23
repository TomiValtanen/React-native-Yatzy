import { View } from "react-native";
import { Text } from "react-native";





function PlayerStats({playerName,bonus,upperTotal,downTotal}){
    return(
       
        <View style={{flex:1,backgroundColor:"transparent",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

        <Text>Player: {playerName}</Text>
        <Text>Bonus: {bonus}</Text>
        </View>

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

        <Text>Yläosan pisteet: {upperTotal}</Text>
        <Text>Alaosan pisteet: {downTotal}</Text>
        </View>
    
    
    
    </View>
    )
}

export default PlayerStats
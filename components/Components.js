import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native";
import { Text } from "react-native";



function Dice({item,handlePress}){
    return(
        <Pressable onPress={()=>handlePress(item.key)}>
                <View  key={item.key}>
                <MaterialCommunityIcons name={`dice-${item.value}`} size={60} color={item.selected ? "orange" : "black"} />
                </View>
        </Pressable>
        
                
    )
}

function UpperSectionCard({item,handlePress}){
    return(
                    <Pressable onPress={()=>handlePress(item)}>
                    <View key={item.rightValue} style={{height:50,flexDirection:"row",borderWidth:1,alignItems:"center",justifyContent:"space-between",padding:5,marginTop:5,marginBottom:5,backgroundColor:item.used ? "orange":"white"}}>
                    <MaterialCommunityIcons name={`dice-${item.rightValue}`} size={30} />
                    <Text>{item.name}</Text>
                    <Text>{item.score}</Text>
                    </View>
                    </Pressable>
    )
}

function DownSectionCard({item,handlePress,index}){
    return(
                    <Pressable onPress={()=>handlePress(item)}>
                    <View key={index} style={{height:50,flexDirection:"row",borderWidth:1,alignItems:"center",justifyContent:"space-between",padding:5,marginTop:5,marginBottom:5,backgroundColor:item.used ? "orange":"white"}}>
                    <MaterialCommunityIcons name={item.icon} size={30} />
                    <Text>{item.name}</Text>
                    <Text>{item.score}</Text>
                    </View>
                    </Pressable>
    )
}

export {Dice,UpperSectionCard,DownSectionCard}
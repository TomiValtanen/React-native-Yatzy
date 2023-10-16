import { FlatList, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import { Styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { NBR_OF_SCOREBOARD } from "../constants/Game";

const SCORE_KEY = '@score_key';


function Scoreboard({ navigation, route }) {
    const [scoreData, setScoreData] = useState([])

    useEffect(() => {
        if (route.params?.score) {
            console.log(route.params.score, "dataaa")
            const newKey = scoreData.length + 1;
            const newScore = {
                key: newKey.toString(),
                name: route.params.score.name,
                score: route.params.score.score
            }
            const newScores = [...scoreData, newScore];
            let arrangedScores = newScores.sort(({ score: a }, { score: b }) => b - a)
            arrangedScores.splice(NBR_OF_SCOREBOARD)
            storeData(arrangedScores);
        }
        getData();
    }, [route.params?.score])

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(SCORE_KEY, jsonValue);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getData = async () => {
        try {
            return AsyncStorage.getItem(SCORE_KEY)
                .then(req => JSON.parse(req))
                .then(json => {
                    if (json === null) {
                        json = [];
                    }
                    setScoreData(json);
                })
                .catch(error => console.log(error))
        }
        catch (e) {
            console.log(e);
        }
    }
    removeValue = async () => {
        try {
          await AsyncStorage.removeItem(SCORE_KEY)
          getData()
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }

     

    console.log(scoreData, "scoreData")
    return (
        <View style={Styles.container}>
            <Header />
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F1EFDC", padding: 10 }}>
                <Text style={{fontSize:20,color:"black",marginBottom:10}}>Top 5:</Text>
                <FlatList
                    data={scoreData}
                    extraData={scoreData}
                    renderItem={({ item, index }) =>

                        <View key={index} style={{ width: 200, height: 60, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, backgroundColor: "orange", marginBottom: 10 ,padding:10,borderRadius:5}}>
                            <Text>Pelaaja: {item.name}</Text>
                            <Text>Pisteet: {item.score}</Text>
                        </View>

                    }

                />
                <TouchableOpacity onPress={()=>removeValue()}>
                    <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"orange",borderRadius:10}}>
                        <Text style={{fontSize:20}}>Resetoi pisteet</Text>
                    </View>

                </TouchableOpacity>
                
                </View>
                <Footer />
            </View>



            )
}


            export default Scoreboard
import { View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScoreboardStyles, Styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { NBR_OF_SCOREBOARD } from "../constants/Game";
import { SCORE_KEY } from "../constants/Game";
import ScoreTable from "../components/ScoreTable";



function Scoreboard({ route }) {
    const [scoreData, setScoreData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getData();

    }, [])

    useEffect(() => {
        if (route.params?.score && isLoading === false) {
            console.log(route.params.score, "dataaa")
            const newKey = scoreData.length + 1;
            const newScore = {
                key: newKey.toString(),
                name: route.params.score.name,
                score: route.params.score.score,
                date: route.params.score.date,
                time: route.params.score.time
            }
            const newScores = [...scoreData, newScore];
            let arrangedScores = newScores.sort(({ score: a }, { score: b }) => b - a)
            arrangedScores.splice(NBR_OF_SCOREBOARD)
            storeData(arrangedScores);
        }
        getData();
    }, [route.params?.score, isLoading])

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
                    setIsLoading(false)
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
        } catch (e) {
            // remove error
        }

        console.log('Done.')
    }

    function checkIndexIsEven(n) {
        return n % 2 == 0;
    }
    
    const scoreboardData = {
        scoreData: scoreData,
        titles: ["Sija", "Nimi", "Pvm", "Aika", "Pisteet"],
        checkIndex: checkIndexIsEven,
        handlePress: () => removeValue(),
        buttonText: "Resetoi pisteet",
        stylesheet: ScoreboardStyles,
        width: "80%",
        height: "75%",
        cusText1: `Top ${NBR_OF_SCOREBOARD}:`,
        cusText2: "Huippupisteitä ei ole vielä tehtynä."
    }

    console.log(scoreData, "scoreData")

    return (
        <View style={Styles.container}>
            <Header />
            <ScoreTable
                item={scoreboardData}
            />
            <Footer />
        </View>



    )
}


export default Scoreboard
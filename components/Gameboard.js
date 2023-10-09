import { useEffect, useState } from "react"
import { FlatList, Pressable, Text, View } from "react-native"
import { Styles } from "../styles/Styles";
import Header from "./Header";
import Footer from "./Footer";
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT } from "../constants/Game";
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Dice, DownSectionCard, UpperSectionCard } from "./Components";
import { Button } from "react-native";
import { Alert } from "react-native";



function Gameboard({ navigation, route }) {
    const [playerName, setPlayerName] = useState("")
    const [dices, setDices] = useState(makeDices())
    const [upper, setUpper] = useState(makeUpperSection())
    const [upperTotal, setUpperTotal] = useState(0)
    const [down, setDown] = useState(makeDownSection())
    const [downTotal,setDownTotal]=useState(0)
    const [numberOfThrows, setNumberOfThrows] = useState(NBR_OF_THROWS)
    const [status, setStatus] = useState("Start round")


    useEffect(() => {
        if (playerName === "" && route.params?.player) {
            setPlayerName(route.params.player)
        }
    }, [])

    useEffect(() => {
        if (numberOfThrows === 0) {
            setStatus("Spend your points")
        } else if (numberOfThrows > 0 && numberOfThrows < 3) {
            setStatus("Throw dices")
        }
        else {
            setStatus("Start round")
        }
    }, [numberOfThrows])


    function makeDices() {
        const arr = []
        for (let i = 0; i < NBR_OF_DICES; i++) {
            arr.push({ key: i, value: Math.floor(Math.random() * 6) + 1, selected: false })
        }
        return arr
    }

    function makeUpperSection() {
        const arr = []
        const yläosa = ["Ykköset", "Kakkoset", "Kolmoset", "Neloset", "Viitoset", "Kuutoset"]
        for (let i = 0; i < yläosa.length; i++) {
            arr.push({ rightValue: i + 1, name: yläosa[i], used: false, score: 0 })
        }
        //console.log(arr,"MakeUpper")
        return arr
    }

    function makeDownSection() {
        const arr = []
        const downSection = ["Yksi pari", "Kaksi paria", "Kolmoisluku", "Neloisluku", "Pieni suora", "Suuri suora", "Täyskäsi", "Sattuma", "Yatzy"]
        for (let i = 0; i < downSection.length; i++) {
            arr.push({ name: downSection[i], used: false, score: 0, icon: "cards" })
        }
        return arr
    }
    function unSelectAllDices() {
        const arr = []
        dices.map(die => {
            arr.push({ ...die, selected: false })
        })
        setDices(arr)
    }

    function selectDice(diceKey) {
        const arr = []
        if (numberOfThrows === 3) {
            return Alert.alert("Info", "Aloita uusi kierros ja valitse noppia sen jälkeen")
        }
        dices.map(dice => {
            if (dice.key === diceKey) {
                arr.push({ ...dice, selected: !dice.selected })
            } else {
                arr.push(dice)
            }
        })
        setDices(arr)
    }

    function throwDices() {
        const arr = []
        dices.map(dice => {
            if (!dice.selected) {
                arr.push({ ...dice, value: Math.floor(Math.random() * 6) + 1 })
            }
            else {
                arr.push(dice)
            }
        })
        setDices(arr)
        setNumberOfThrows(prev => prev - 1)
    }

    function selectUpper(item) {

        if (numberOfThrows !== 0) {
            return Alert.alert("Info", "Heitä kaikki kerrat loppuun ja valitse sitten")
        }
        if (item.used === true) {
            return Alert.alert("Info", "Et voi valita tätä uudestaan")
        }

        const arr = []
        const sameNumbers = checkNumbers(dices, item.rightValue)
        const sum = item.rightValue * sameNumbers
        upper.map(upper => {
            if (item.name === upper.name) {
                arr.push({ ...upper, used: true, score: sum })
            }
            else {
                arr.push(upper)
            }

        })
        setUpper(arr)
        setUpperTotal(prev => prev + sum)
        setNumberOfThrows(3)
        unSelectAllDices()
    }
    function checkNumbers(numbers, wantedNumber) {

        let counter = 0
        numbers.map(number => {
            if (Number(number.value) === Number(wantedNumber)) {

                counter = counter + 1
            }
        })

        return counter
    }

    function selectDown(item) {
        if (numberOfThrows !== 0) {
            return Alert.alert("Info", "Heitä kaikki kerrat loppuun ja valitse sitten")
        }
        if (item.used === true) {
            return Alert.alert("Info", "Et voi valita tätä uudestaan")
        }
        const arr = []
        console.log(item)
        //const sum = pairCheck(dices, false)
        const sum = triplets(dices,false)
        console.log(sum, "Summa selectDown")
        down.map(down => {
            if (item.name === down.name) {
                arr.push({ ...down, used: true, score: sum })
            } else {
                arr.push(down)
            }
        })
        setDown(arr)
        setDownTotal(prev => prev + sum)
        setNumberOfThrows(3)
        unSelectAllDices()

    }

    function pairCheck(numbers, onePair) {
        const numbersArray = []
        const pair = []
        const secondPair = []
        let pairSum = 0
        let secondPairSum = 0
        console.log(numbers, "Pair check")
        numbers.map(number =>
            numbersArray.push(number.value)
        )
        console.log(numbersArray, "ARRAY")

        for (let i = 0; i < numbersArray.length; i++) {
            for (let j = i + 1; j < numbersArray.length + 1; j++) {
                if (numbersArray[i] === numbersArray[j]) {
                    if (pair.length !== 0 && pair.indexOf(numbersArray[i]) === -1) {
                        console.log(pair, "if lauseen sisällä forrissa")
                        console.log(numbersArray[i], "Yksittäinen iffinsisäsässä")
                        pair.push(numbersArray[j], numbersArray[i])

                    } else if (pair.length === 0) {
                        pair.push(numbersArray[j], numbersArray[i])
                    }

                }
            }
        }
        console.log(pair, "Parit forrien jälkeen")

        if (pair.length === 3) {
            pair.splice(2)
        }
        else if (pair.length === 4) {
            secondPair.push(pair[2], pair[3])
            pair.splice(2)
        }

        if (onePair === true) {
            if (secondPair.length !== 0) {
                for (let i = 0; i < pair.length; i++) {
                    pairSum += pair[i]
                }
                for (let i = 0; i < secondPair.length; i++) {
                    secondPairSum += secondPair[i]
                }
                return pairSum >= secondPairSum ? pairSum : secondPairSum
            } else {
                for (let i = 0; i < pair.length; i++) {
                    pairSum += pair[i]
                }
                return pairSum
            }

        } else {
            if (secondPair.length !== 0) {
                for (let i = 0; i < pair.length; i++) {
                    pairSum += pair[i]
                }
                for (let i = 0; i < secondPair.length; i++) {
                    secondPairSum += secondPair[i]
                }
                return pairSum + secondPairSum
            } else {
                for (let i = 0; i < pair.length; i++) {
                    pairSum += pair[i]
                }
                return pairSum
            }

        }
    }

    function triplets(numbers,tripletScore){
        const numbersArray=[]
        const checkingNumbers=[]
        let tripletSum=0
        
        numbers.map(number =>
             numbersArray.push(number.value))

        const numbersSet = new Set(numbersArray)

        numbersSet.forEach(function(value){
            checkingNumbers.push(value)
        })

        
        const sameNum=sameNumbersCalculate(numbersArray,checkingNumbers)
        
        
        if(sameNum){
            if(tripletScore===true){
                if(Number(sameNum[0].index)===4){
                    tripletSum= Number(sameNum[0].numero) * Number(sameNum[0].index-1)
                }
                else if(Number(sameNum[0].index)===5){
                    tripletSum= Number(sameNum[0].numero) * Number(sameNum[0].index-2)
                }
                else{
                    tripletSum= Number(sameNum[0].numero) * Number(sameNum[0].index)
                }
            }
            if(tripletScore===false){
                if(Number(sameNum[0].index)===4){
                    tripletSum= Number(sameNum[0].numero) * Number(sameNum[0].index)
                }
                else if(Number(sameNum[0].index)===5){
                    tripletSum= Number(sameNum[0].numero) * Number(sameNum[0].index-1)
                }
                else{
                    tripletSum=0
                }
            }
            
        }else{
            tripletSum=0
        }
        

        console.log(numbers, "triplets check")
        console.log(numbersArray, "ARRAY")
        console.log(numbersSet,"setti")
        console.log(checkingNumbers,"tarkistus numerot array")
        console.log(sameNum,"testin jälkeen")
        return tripletSum
    }
    const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

    function sameNumbersCalculate(numbersArray,checkingNumbers){
        let array=[]
        let result=[]
        for(let i =0;i<checkingNumbers.length;i++){
            array=indexOfAll(numbersArray,checkingNumbers[i])
            if(array.length >=3){
                result.push({numero:checkingNumbers[i],index:array.length})
                return result
            }
                
        }
        return result=false
    }


    //console.log(dices)
    //console.log(upper)
    //console.log(down)
    return (
        <View style={Styles.gameboard}>
            <Header />
            <View style={{ flex: 6, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 15, padding: 5 }}>
                <View style={{ flex: 1, alignItems: "left", width: "30%" }}>
                    <Text style={{ textAlign: "center" }}>Yläosa</Text>
                    <FlatList
                        data={upper}
                        extraData={upper}
                        renderItem={({ item }) =>
                            <UpperSectionCard
                                item={item}
                                handlePress={selectUpper}

                            />
                        }

                    />
                    <Text>Total: {upperTotal} </Text>
                </View>
                <View style={{ flex: 1, alignItems: "left", width: "30%" }}>
                    <Text style={{ textAlign: "center" }}>Yläosa</Text>
                    <FlatList
                        data={down}
                        extraData={down}
                        renderItem={({ item, index }) =>
                            <DownSectionCard
                                item={item}
                                handlePress={selectDown}
                                index={index}
                            />
                        }

                    />
                    <Text>Total: {downTotal} </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList
                    data={dices}
                    extraData={dices}
                    horizontal={true}
                    renderItem={({ item }) =>

                        <Dice

                            item={item}
                            handlePress={selectDice}
                        />

                    }

                />


            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Throws left:{numberOfThrows}</Text>
                <Button title={status} onPress={numberOfThrows === 0 ? () => null : throwDices}></Button>

                <Text>Player: {playerName}</Text>
            </View>

            <Footer />
        </View>
    )
}
export default Gameboard
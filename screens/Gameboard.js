import { useEffect, useState } from "react"
import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native"
import { GameboardStyles, Styles } from "../styles/Styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT } from "../constants/Game";
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { CustomFlatlist, Dice, DownSectionCard, UpperSectionCard, Selection, PressableButton } from "../components/Components";
import { Button } from "react-native";
import { Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import YatzySelection from "../components/YatzySelection";
import DiceSelection from "../components/DiceSelection";
import ThrowSelection from "../components/ThrowSelection";



function Gameboard({ navigation, route }) {
    const [playerName, setPlayerName] = useState("")
    const [dices, setDices] = useState(makeDices())
    const [upper, setUpper] = useState(makeUpperSection())
    const [upperTotal, setUpperTotal] = useState(0)
    const [down, setDown] = useState(makeDownSection())
    const [downTotal, setDownTotal] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [totalPoints, setTotalPoints] = useState(0)
    const [numberOfThrows, setNumberOfThrows] = useState(NBR_OF_THROWS)
    const [status, setStatus] = useState("Start round")
    const [gameIsOn, setGameIsOn] = useState(true)


    useEffect(() => {
        if (playerName === "" && route.params?.player) {
            setPlayerName(route.params.player)

        }
    }, [])
    useEffect(() => {
        if (gameIsOn === false) {
            Alert.alert("Peli loppui", `Pelaaja: ${playerName}\nPisteet:\nYläosasta: ${upperTotal}\nAlaosasta: ${downTotal}\nBonus: ${bonus}\n\nYhteensä: ${totalPoints}`, [
                {
                    text: 'Aloita uudestaan',
                    onPress: () => newGame(),
                    style: 'cancel',
                },
                { text: 'Tallenna pisteesi', onPress: () => navigateScore() },
            ])
        }

    }, [gameIsOn])
    useEffect(() => {
        if (numberOfThrows === 0) {
            setStatus("Käytä pisteesi")
        } else if (numberOfThrows > 0 && numberOfThrows < 3) {
            setStatus("Heitä noppaa")
        }
        else {
            setStatus("Aloita kierros")
        }
    }, [numberOfThrows])

    useEffect(() => {
        const checkUpper = Array.prototype.every.call(upper, (item) => item.used === true)
        const checkDown = Array.prototype.every.call(down, (item) => item.used === true)
        console.log(checkUpper, "UseEffect checkkeri Bonukselle")
        if (checkUpper && upperTotal >= BONUS_POINTS_LIMIT) {
            setBonus(BONUS_POINTS)
        }
        if (checkDown && checkUpper) {
            setTotalPoints(bonus + upperTotal + downTotal)
            setGameIsOn(false)
        }

    }, [upper, down])

    function newGame() {
        setGameIsOn(true)
        setDices(makeDices())
        setUpper(makeUpperSection())
        setDown(makeDownSection())
        setDownTotal(0)
        setUpperTotal(0)
        setBonus(0)

    }
    function navigateScore() {
        navigation.navigate("Scoreboard", { score: { name: playerName, score: totalPoints } })
        newGame()
    }

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
            arr.push({ rightValue: i + 1, name: yläosa[i], used: false, score: 0, icon: `dice-${i + 1}` })
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
        let sum = ""
        switch (item.name) {
            case "Yksi pari":
                sum = pairCheck(dices, true);
                break;
            case "Kaksi paria":
                sum = pairCheck(dices, false);
                break;
            case "Kolmoisluku":
                sum = triplets(dices, true);
                break;
            case "Neloisluku":
                sum = triplets(dices, false);
                break;
            case "Pieni suora":
                sum = straight(dices, true);
                break;
            case "Suuri suora":
                sum = straight(dices, false);
                break;
            case "Täyskäsi":
                sum = fullHouse(dices);
                break;
            case "Sattuma":
                sum = chance(dices);
                break;
            case "Yatzy":
                sum = yatzy(dices);
                break;
            default:
                console.log("MENI VITUIKSI");
        }

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
                return pairSum
            }

        }
    }

    function triplets(numbers, tripletScore) {
        const numbersArray = []
        const checkingNumbers = []
        let tripletSum = 0

        numbers.map(number =>
            numbersArray.push(number.value))

        const numbersSet = new Set(numbersArray)

        numbersSet.forEach(function (value) {
            checkingNumbers.push(value)
        })


        const sameNum = sameNumbersCalculate(numbersArray, checkingNumbers)


        if (sameNum) {
            if (tripletScore === true) {
                if (Number(sameNum[0].index) === 4) {
                    tripletSum = Number(sameNum[0].numero) * Number(sameNum[0].index - 1)
                }
                else if (Number(sameNum[0].index) === 5) {
                    tripletSum = Number(sameNum[0].numero) * Number(sameNum[0].index - 2)
                }
                else {
                    tripletSum = Number(sameNum[0].numero) * Number(sameNum[0].index)
                }
            }
            if (tripletScore === false) {
                if (Number(sameNum[0].index) === 4) {
                    tripletSum = Number(sameNum[0].numero) * Number(sameNum[0].index)
                }
                else if (Number(sameNum[0].index) === 5) {
                    tripletSum = Number(sameNum[0].numero) * Number(sameNum[0].index - 1)
                }
                else {
                    tripletSum = 0
                }
            }

        } else {
            tripletSum = 0
        }


        console.log(numbers, "triplets check")
        console.log(numbersArray, "ARRAY")
        console.log(numbersSet, "setti")
        console.log(checkingNumbers, "tarkistus numerot array")
        console.log(sameNum, "testin jälkeen")
        return tripletSum
    }
    const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

    function sameNumbersCalculate(numbersArray, checkingNumbers) {
        let array = []
        let result = []
        for (let i = 0; i < checkingNumbers.length; i++) {
            array = indexOfAll(numbersArray, checkingNumbers[i])
            if (array.length >= 3) {
                result.push({ numero: checkingNumbers[i], index: array.length })
                return result
            }

        }
        return result = false
    }

    function straight(numbers, smallStraight) {
        const numbersArray = []
        const smallStraightValues = [1, 2, 3, 4, 5]
        const bigStraightValues = [2, 3, 4, 5, 6]
        let sum = 0
        numbers.map(number =>
            numbersArray.push(number.value))

        numbersArray.sort(function (a, b) { return a - b })

        if (smallStraight) {
            if (equalsCheck(numbersArray, smallStraightValues)) {
                sum = 15
            }
        } else {
            if (equalsCheck(numbersArray, bigStraightValues)) {
                sum = 20
            }
        }
        console.log(numbersArray, "ARRAy")
        return sum



    }
    const equalsCheck = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    function chance(numbers) {
        const numbersArray = []
        let sum = 0
        numbers.map(number =>
            numbersArray.push(number.value))

        sum = numbersArray.reduce(chanceSum)

        return sum
    }

    function chanceSum(total, num) {
        return total + num;
    }
    function yatzy(numbers) {
        const numbersArray = []
        let sum = 0
        numbers.map(number =>
            numbersArray.push(number.value))

        if (allEqual(numbersArray)) {
            sum = 50
        }
        console.log("YATZY")
        return sum
    }
    const allEqual = arr => arr.every(val => val === arr[0])

    function fullHouse(numbers) {
        const numbersArray = []
        const checkingNumbers = []
        let sum = 0

        numbers.map(number =>
            numbersArray.push(number.value))

        const numbersSet = new Set(numbersArray)

        numbersSet.forEach(function (value) {
            checkingNumbers.push(value)
        })


        if (checkingNumbers.length === 2) {
            console.log("Käyty iffissä sameNumberFullHouse")
            sum = sameNumbersFullHouse(numbersArray, checkingNumbers)
        }


        console.log(checkingNumbers, "checkingnumbers")
        console.log(sum, "sum")
        return sum



    }
    function sameNumbersFullHouse(numbersArray, checkingNumbers) {
        let array = []
        let pair = []
        let triplets = []
        let sum = 0
        for (let i = 0; i < checkingNumbers.length; i++) {
            array = indexOfAll(numbersArray, checkingNumbers[i])
            if (array.length === 3) {
                triplets.push({ numero: checkingNumbers[i], index: array.length })
                array = []
            } else if (array.length === 2) {
                pair.push({ numero: checkingNumbers[i], index: array.length })
                array = []
            }

        }
        console.log(pair, "Pair FUll house hommassa")
        console.log(triplets, "Triplets fullhouse hommassa")
        if (pair[0].index === 2 && triplets[0].index === 3) {
            const tripletsSum = Number(triplets[0].numero) * Number(triplets[0].index)
            const pairSum = Number(pair[0].numero) * Number(pair[0].index)
            sum = tripletsSum + pairSum

        }
        console.log(sum, "SUMMA LOPUSSA")
        return sum
    }

    const selectionData = [{
        data: upper,
        handleSelect: selectUpper,
        horizontal: false,
        dice: false,
        text: "Yläosa",
        textPara: [`Player: ${playerName}`, `Bonus: ${bonus}`, `Yläosan pisteet: ${upperTotal}`]
    },
    {
        data: down,
        handleSelect: selectDown,
        horizontal: false,
        dice: false,
        text: "Alaosa",
        textPara: [`Alaosan pisteet: ${downTotal}`]

    }]
    const diceData = {
        data: dices,
        handleSelect: selectDice,
        horizontal: true,
        dice: true,
        numberOfThrows: numberOfThrows
    }

    const throwData={
        handlePress:throwDices,
        buttonText:status,
        width:"100%",
        height:"100%",
        stylesheet:GameboardStyles,
        numberOfThrows:numberOfThrows

    }
    //console.log(dices)
    //console.log(upper)
    //console.log(down)
    return (
        <View style={Styles.gameboard}>
            <Header />
            <YatzySelection
                item={selectionData}
            />
            <DiceSelection
                item={diceData}
            />
            <ThrowSelection
            item={throwData}
            />
            <Footer />
        </View>
    )
}
export default Gameboard
import { useEffect, useState } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NBR_OF_DICES, NBR_OF_THROWS, BONUS_POINTS, BONUS_POINTS_LIMIT, YLÄOSA, UPPER_SECTION, DOWN_SECTION, DOWN_SECTION_ICONS } from "../constants/Game";
import { Alert } from "react-native";
import YatzySelection from "../components/YatzySelection";
import DiceSelection from "../components/DiceSelection";
import ThrowSelection from "../components/ThrowSelection";
import { checkNumbers, returnSum } from "../components/GameboardFunctions";
import PlayerStats from "../components/PlayerStats";
import { BackgroundTemplate } from "../components/Components";



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
        const unsubscribe = navigation.addListener('tabLongPress', () => {
            Alert.alert(
                'Haluatko varmasti aloittaa uuden pelin?',
                'Pelisi alkaa alusta , eikä sitä voida palauttaa',
                [
                    {
                        text: 'Uusi peli',
                        style: 'destructive',
                        onPress: () => newGame(),
                    },
                    { text: "Jatka pelaamista", style: 'cancel', onPress: () => { } },

                ]
            );
        });
        return unsubscribe;
    }, [navigation]);



    useEffect(() => {
        if (playerName === "" && route.params?.player) {
            setPlayerName(route.params.player)
            newGame()

        } else if (playerName !== route.params?.player) {
            setPlayerName(route.params.player)
            newGame()
        }
        console.log("Tämä nimi homma tapahtui")
    }, [route.params?.player])



    useEffect(() => {
        if (gameIsOn === false) {
            const dateTime = date()
            Alert.alert("Peli loppui", `Pelaaja: ${playerName}\nPäivämäärä: ${dateTime.date}\nKellonaika: ${dateTime.time}\nPisteet:\nYläosasta: ${upperTotal}\nAlaosasta: ${downTotal}\nBonus: ${bonus}\n\nYhteensä: ${totalPoints}`, [
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
        setNumberOfThrows(3)

    }
    function navigateScore() {
        const dateTime = date()
        navigation.navigate("Pistetaulu", { score: { name: playerName, score: totalPoints, date: dateTime.date, time: dateTime.time } })
        newGame()
    }
    function addZero(i) {
        if (i < 10) {
            i = `0${i}`
        }
        return i
    }
    function date() {


        const d = new Date()
        const day = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        const hours = addZero(d.getHours())
        const minutes = addZero(d.getMinutes())

        return dateAndTime = { date: `${day}.${month}.${year}`, time: `${hours}:${minutes}` }
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
        for (let i = 0; i < UPPER_SECTION.length; i++) {
            arr.push({ rightValue: i + 1, name: UPPER_SECTION[i], used: false, score: 0, icon: `dice-${i + 1}` })
        }
        //console.log(arr,"MakeUpper")
        return arr
    }

    function makeDownSection() {
        const arr = []
        for (let i = 0; i < DOWN_SECTION.length; i++) {
            arr.push({ name: DOWN_SECTION[i], used: false, score: 0, icon: DOWN_SECTION_ICONS[i] })
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
    function checkAlerts(item) {
        if (numberOfThrows !== 0) {
            return Alert.alert("Info", "Heitä kaikki kerrat loppuun ja valitse sitten")
        }
        else if (item.used === true) {
            return Alert.alert("Info", "Et voi valita tätä uudestaan")
        } else {
            return false
        }
    }
    function selectUpper(item) {

        if (checkAlerts(item) !== false) {
            return
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


    function selectDown(item) {

        if (checkAlerts(item) !== false) {
            return
        }

        const arr = []
        console.log(item)

        let sum = returnSum(item, dices)

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

    function handleBonus() {
        let toBonus = BONUS_POINTS_LIMIT - upperTotal
        if (toBonus < 0) {
            toBonus = 0
        }
        return toBonus
    }


    const selectionData = [{
        data: upper,
        handleSelect: selectUpper,
        horizontal: false,
        dice: false,
        text: "Yläosa", 
    },
    {
        data: down,
        handleSelect: selectDown,
        horizontal: false,
        dice: false,
        text: "Alaosa",
    }]
    const diceData = {
        data: dices,
        handleSelect: selectDice,
        horizontal: true,
        dice: true,
        numberOfThrows: numberOfThrows
    }
    const throwData = {
        handlePress: throwDices,
        buttonText: status,
        numberOfThrows: numberOfThrows

    }

    //console.log(dices)
    //console.log(upper)
    //console.log(down)
    return (
        <BackgroundTemplate>
            <Header />
            <YatzySelection
                item={selectionData}
            />
            <PlayerStats
                playerName={playerName}
                bonus={bonus}
                upperTotal={upperTotal}
                downTotal={downTotal}
                handleBonus={handleBonus()}
            />
            <DiceSelection
                item={diceData}
            />
            <ThrowSelection
                item={throwData}
            />
            <Footer />
        </BackgroundTemplate>
    )
}
export default Gameboard
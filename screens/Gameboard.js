import { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Styles } from "../styles/Styles";



let board =[]
const NBR_OF_DICES=5
const NBR_OF_THROWS=5
const WINNING_POINTS=23

function Gameboard(){
const [nbrOfThrowsLeft,setNbrOfThrowsLeft]=useState(NBR_OF_THROWS)
const [nbrOfWins,setNbrOfWins]=useState(0)
const [sum,setSum]=useState(0)
const [status,setStatus]=useState("")

useEffect(()=>{
checkWinner()
if(nbrOfThrowsLeft === NBR_OF_THROWS){
    setStatus("Game has not started")
}
if(nbrOfThrowsLeft < 0){
    setNbrOfThrowsLeft(NBR_OF_THROWS -1)
    setNbrOfWins(0)
}


},[nbrOfThrowsLeft])


function throwDices(){
    let sum=0
    for (let i =0;i<NBR_OF_DICES;i++){
        let randomNumber=Math.floor(Math.random()*6+1)
        board[i]=`dice-${randomNumber}`
        sum+=randomNumber
    }
    setNbrOfThrowsLeft(prev=>prev -1)
    setSum(sum)
    console.log(board)
}

function checkWinner(){
    if(sum>=WINNING_POINTS && nbrOfThrowsLeft >0){
        setNbrOfWins(prev=>prev + 1)
        setStatus("You won")
    }
    else if(sum >=WINNING_POINTS && nbrOfThrowsLeft === 0){
        setNbrOfWins(prev=> prev + 1)
        setStatus("You won , Game over")
    }
    else if(nbrOfWins > 0 && nbrOfThrowsLeft === 0 ){
        setStatus("You won , Game over")
    }
    else if(nbrOfThrowsLeft===0){
        setStatus("Game over")
    }
    else {
        setStatus("Keep on throwing!")
    }
}

const row=[]
for(let i =0 ; i < NBR_OF_DICES;i++){
    row.push(
        <MaterialCommunityIcons
        name={board[i]}
        key={`row${i}`}
        size={50}
        color={"steelblue"}
        
        />


    )
}
console.log(row)
    return(
        <View style={Styles.gameboard}>
            <View style={Styles.flex}>
                {row}
            </View>
                <Text style={Styles.gameinfo}>sum: {sum}</Text>
                <Text style={Styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
                <Text style={Styles.gameinfo}>Nbr of wins: {nbrOfWins}</Text>
                <Text style={Styles.gameinfo}>{status}</Text>
                <Pressable
                 style={Styles.button}
                 onPress={()=>throwDices()}
                 >
                    <Text style={Styles.buttonText}>Throw Dices</Text>
                </Pressable>
            
        </View>
    )
}
export default Gameboard
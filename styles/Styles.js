import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

const Styles = StyleSheet.create({

  container: {
    marginTop: Constants.statusBarHeight + 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "strech",
    backgroundColor: "#F1EFDC"
  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"

  },
  giveNameContainer: {
    flex: 5,
    alignItems: "stretch",
    justifyContent: "center",

  },
  nameInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10, padding: 10,
    height: "40%"
  },
  nameText: {
    color: "#000000"
  },
  textInput: {
    backgroundColor: "#ffffff",
    width: "50%",
    height: 40
  },
  pressableContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#D36B00",
    borderRadius: 5,
    width:"50%",
    height:"30%"

  },
  pressableText: {
    padding: 10,
  },
  header: {
    height: "5%",
    backgroundColor: '#D36B00',
    flexDirection: 'row',
    padding: 5,
    alignItems: "center"
  },
  footer: {
    height: "5%",
    backgroundColor: '#D36B00',
    flexDirection: 'row',
    padding: 5,
    alignItems: "center"
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',

  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20
  },
  customTextContainer: {
    flex: 1
  },
  customText: {
    color: "black",
    textAlign: "left",
    paddingLeft: 15,
    paddingRight: 15
  },
  gameboard: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: "#F1EFDC",
    alignItems: "stretch",
    justifyContent: 'center'
  },
  flatlistContainer: {
    flex: 1,
    alignItems: "left",
    justifyContent: "flex-end"
  },
  gameinfo: {

    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "#2B2B52",
    fontSize: 20
  }
});

const RulesStyles=StyleSheet.create({
  pressableContainer: {
    ...Styles.pressableContainer,
  width:"100%",
  height:"100%"

  },
  pressableText: {
    padding: 10,
    fontSize: 20,
    color: "white"
  },
})
const GameboardStyles = StyleSheet.create({
  pressableContainer: {
    ...Styles.pressableContainer,
    borderRadius: 0,
    borderWidth: 1,
    borderColor:"#42032C",
    backgroundColor: "#42032C",
    width:"100%",
    height:"100%"

  },
  pressableText: {
    padding: 10,
    fontSize: 20,
    color: "white"
  },
  selectionContainer: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 5
  },
  diceSelection: {
    flex: 1.25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6D2AA"
  },
  throwSelectionContainer: {
    flex: 1,
    flexDirection: "row",
    
  },
  throwsLeftContainer: {
    flex: 1,
    flexDirection: "column"
  },
  throwsLeftText: {
    textAlign: "center",
    color: "black"
  },
  throwsLeftIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  customTextContainer: {
    flex: 1,
    gap:0,
    justifyContent:"flex-end"
  },
  customText: {
    ...Styles.customText,
  },
  
})

const ScoreboardStyles = StyleSheet.create({
  scoreTableContainer:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch", 
    gap: 20 
  },
  dataTableRow: {
    backgroundColor: "red"
  },
  dataTableTitleText: {
    color: "white",
    fontSize: 15
  },
  dataTableCellText: {
    fontSize: 15
  },
  pressableContainer: {
    ...Styles.pressableContainer,
    borderRadius: 5,
    borderWidth: 1,
    width:"60%",
    height:"60%"

  },
  pressableText: {
    padding: 10,
    fontSize: 20,
    color: "white"
  },
  customTextContainer: {
    flex: 0.7,
    justifyContent:"center",
    alignItems:"center"
  },
  customText: {
    ...Styles.customText,
    fontSize: 35,

  },
})

export { Styles, GameboardStyles, ScoreboardStyles ,RulesStyles}
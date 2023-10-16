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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  giveNameContainer: {
    flex: 5,
    alignItems:"stretch",
    justifyContent: "center",
    
  },
  nameInputContainer:{
    flex:1,
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
  pressableContainer:{
    borderWidth:1,
    width:"40%",
    height:"30%",
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    backgroundColor:"#D36B00",
    borderRadius:5
    
  },
  pressableText:{
    padding:10
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
  gameboard: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: "#F1EFDC",
    alignItems: "stretch",
    justifyContent: 'center'
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


export { Styles }
# React-native-Yatzy
### Palautettava koulutyö
Tavoitteena oli tehdä yatzy peli. Itse olen valinnut tehtäväksi skandinaavisen version.
Pelissä heitetään viitta noppaa ja itse pöytäkirja koostuu "Yläosasta" ja "Alaosasta". Pöytäkirjan täyttö on vapaasti pelaajan itse valittavissa.
Alla olevilla yhdistelmä säännöillä olen tehnyt pelin.
https://fi.wikipedia.org/wiki/Yatzy
"Yatzyssa käyvät seuraavat yhdistelmät:

> ### Pöytäkirjan yläosan yhdistelmät:
>
> - Ykköset: tavoite on saada 1–5 kappaletta 1-silmälukuja
> - Kakkoset: tavoite on saada 1–5 kappaletta 2-silmälukuja
> - Kolmoset: tavoite on saada 1–5 kappaletta 3-silmälukuja
> - Neloset: tavoite on saada 1–5 kappaletta 4-silmälukuja
> - Viitoset: tavoite on saada 1–5 kappaletta 5-silmälukuja
> - Kuutoset: tavoite on saada 1–5 kappaletta 6-silmälukuja
> - Mikäli pöytäkirjan yläosan yhdistelmistä pelaaja saa 63 pistettä tai yli, hän saa 50 bonuspistettä lopputulokseensa.
>
> ### Pöytäkirjan alaosan yhdistelmät (skandinaavisessa versiossa):
>
> - Yksi pari: kaksi kappaletta samaa silmälukua, esimerkiksi 1+3+4+5+5 = 5+5 = 10 pistettä
> - Kaksi paria: kaksi eri paria, esimerkiksi 1+3+3+5+5 = 3+3 ja 5+5 = 16 pistettä, esim. 1+4+4+4+4 ei kelpaa.
> - Kolmoisluku: kolmessa nopassa sama silmäluku, esimerkiksi 2+4+4+4+5 = 4+4+4 = 12 pistettä
> - Neloisluku: neljässä nopassa sama luku, esimerkiksi 2+3+3+3+3 = 3+3+3+3 = 12 pistettä
> - Pieni suora: viidessä nopassa silmäluvut 1+2+3+4+5 = 15 pistettä
> - Suuri suora: viidessä nopassa silmäluvut 2+3+4+5+6 = 20 pistettä
> - Täyskäsi (Mökki): yksi pari ja yksi kolmoisluku, esimerkiksi 3+3+6+6+6 = 24 pistettä
> - Sattuma: Silmälukujen summa. Hyödyllinen, jos pelaaja ei saa mitään jäljellä olevaa yhdistelmää.
> - Yatzy: kaikissa viidessä nopassa sama silmäluku: aina 50 pistettä."

Kun kaikki pöytäkirjan kohdat ovat valittuina peli loppuu.

### Vaatimukset 

- App starts in phone (Expo) without errors and warnings :heavy_check_mark:
- Structure of the files: Follows the requirements (preparing exercises) :heavy_check_mark:
- Styles: Own styles have been used when developing user interface :heavy_check_mark:
- Navigation and navigation props: Follows the requirements :heavy_check_mark:
- Home page: Name of the player is asked and passed to Gameboard :heavy_check_mark:
- Gameboard: Initialization of the app (new game) works :heavy_check_mark:
- Gameboard: Throwing and selecting dices follow the instructions :heavy_check_mark:
- Gameboard: Calculating and showing points follow the instructions :heavy_check_mark:
- Gameboard: Handling abnormal situations follows the instructions :heavy_check_mark:
- Scoreboard: Follows the requirements (clear is not absolute necessity) :heavy_check_mark:

### Sovelluksesta kuvia
Itselläni on ollut käytössä sovellusta tehdessäni OnePlus Nord (AC2003) puhelin, millä olen tehnyt testaamisen. Taustakuva ja logo ovat vaihtuneet
  Aloitusnäyttö | Säännöt | Pelilauta | Pistetaulu 
  --- | --- | --- | ---
  <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/e23ff0e1-5489-48ee-a522-c759957f1acc" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/21b01a29-6742-4c55-ad9f-8035f84ea417" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/35a1ee39-19d8-4df1-9000-0814d1128a00" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/8b9f84af-9c33-4f1a-b6f0-7f8ff330072b" width="200" height="350"> 
### Pelin aikana
   Peli käynnissä | Peli info 1 | Peli info 2 | Peli loppui 
  --- | --- | --- | ---
  <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/7e1aa334-e63b-4e79-b669-33911009794b" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/a028fcf9-13a3-4860-9001-333adc06100a" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/f239dd69-4890-4a7d-aefc-64eec518cbbe" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/f92607ab-4fff-4a1c-96e1-67c5bef7850d" width="200" height="350"> 
  ### Pistetaulu
  Yhden henkilön pisteet | Useamman pelaajan pisteet 
 --- | ---
<img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/d72d8f0c-b94e-4225-aa48-91efd5b5f3bd" width="200" height="350"> |   <img src="https://github.com/TomiValtanen/React-native-Yatzy/assets/101732234/ecd3d8fa-1fe8-4aee-a529-e0bf1572b125" width="200" height="350">



export const NBR_OF_DICES=5
export const NBR_OF_THROWS=3
export const BONUS_POINTS_LIMIT=63
export const BONUS_POINTS=50
export const NBR_OF_SCOREBOARD=10
export const UPPER_SECTION = ["Ykköset", "Kakkoset", "Kolmoset", "Neloset", "Viitoset", "Kuutoset"]
export const DOWN_SECTION = ["Yksi pari", "Kaksi paria", "Kolmoisluku", "Neloisluku", "Pieni suora", "Suuri suora", "Täyskäsi", "Sattuma", "Yatzy"]
export const DOWN_SECTION_ICONS = ["numeric-1-box-multiple", "numeric-2-box-multiple", "numeric-3-box-multiple", "numeric-4-box-multiple", "cards-outline", "cards", "home", "progress-question", "crown"]
export const SCORE_KEY = '@score_key'


//Tekstit
//Säännöt
export const RULES=`Yatzy:${"\n"}
Pöytäkirja jakautuu kahteen osaa: ylä- ja alapuoleen.${"\n"}
Yläpuolella on kohdat:${"\n"}
Ykköset${"\n"}
Kakkoset${"\n"}
Kolmoset${"\n"}
Neloset${"\n"}
Viitoset${"\n"}
Kuutoset${"\n"}
Välisumma${"\n"}
Bonus${"\n"}${"\n"}
Yläpuolen kohdissa lasketaan yksinkertaisesti kyseisten numeroiden summa.${"\n"}Ykkösiin lasketaan siis noppien ykköset, kakkosiin kakkoset ja niin edelleen.${"\n"}Tulos 3-3-3-6-6 olisi kolmosissa 9 pistettä ja kuutosissa 12 pistettä.
Välisummaan lasketaan kaikkien kuuden numerokentän summa. Jos siihen tulee vähintään ${BONUS_POINTS_LIMIT} pistettä, pelaaja saa kirjata itselleen ${BONUS_POINTS} pisteen bonuksen. ${BONUS_POINTS_LIMIT} pistettä saavuttaa, kun saa jokaiseen kohtaan vähintään kolme oikeaa numeroa.${"\n"}${"\n"}
Alapuolella on kohdat:${"\n"}
Yksi pari: kaksi kertaa sama silmäluku. 1-3-4-4-6 = 4+4 = 8 pistettä.${"\n"}
Kaksi paria: kaksi eri paria. 1-1-4-4-6 = 1+1 + 4+4 = 10 pistettä.${"\n"}
Kolmoisluku: kolme samaa silmälukua. 1-3-3-3-6 = 3+3+3 = 9 pistettä.${"\n"}
Neloisluku: neljä samaa silmälukua. 1-3-3-3-3 = 3+3+3+3 = 12 pistettä.${"\n"}
Pieni suora: numerot 1-2-3-4-5. 15 pistettä.${"\n"}
Suuri suora: numerot 2-3-4-5-6. 20 pistettä.${"\n"}
Täyskäsi eli mökki: kolmoisluku ja pari. 3-3-3-5-5 = 3+3+3+5+5 = 19 pistettä.${"\n"}
Sattuma: mitä tahansa. Tähän kelpaa mitä tahansa, pisteiksi lasketaan silmälukujen summa.${"\n"}
Yatzy: viisi samaa silmälukua. ${BONUS_POINTS} pistettä.${"\n"}
Pelaajan peli on ohi, kun kaikki kohdat pöytäkirjasta on täytetty. Lopputulos saadaan laskemalla pelaajan pisteet yhteen.`
//Pisteytys
export const POINTS=`PISTEYTYS: Pisteet voidaan laitta ylä- tai alapuoleen, kun on heittänyt noppia kolme kertaa. Pisteytys jakautuu yllä olevien ohjeiden mukaisesti.`
//Pelin tavoite
export const AIM=`TAVOITE: Saada mahdollisimman paljon pisteitä pelin aikana.Yläosasta on mahdollista saada bonus pisteitä ${BONUS_POINTS} , jos saa yläosasta yhteensä ${BONUS_POINTS_LIMIT} pistettä tai enemmän.\nPelin voi aloittaa alusta painamalla "Pelilauta" iconia pohjassa muutaman sekunnin ajan. Vaihtamalla nimen toiseen mitä ensiksi syötetty on aloittaa uuden pelin.`




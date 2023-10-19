function returnSum(item,dices){
    switch (item.name) {
        case "Yksi pari":
            return pairCheck(dices, true);
           
        case "Kaksi paria":
            return pairCheck(dices, false);
           
        case "Kolmoisluku":
            return triplets(dices, true);
           
        case "Neloisluku":
            return triplets(dices, false);
           
        case "Pieni suora":
            return straight(dices, true);
           
        case "Suuri suora":
            return straight(dices, false);
           
        case "Täyskäsi":
            return fullHouse(dices);
           
        case "Sattuma":
            return chance(dices);
           
        case "Yatzy":
            return yatzy(dices);
           
        default:
            console.log("Eihän se näin pitänyt mennä");
    }
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
    console.log(numbers, "Triplets")
    console.log(tripletScore, "score")
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

function checkNumbers(numbers, wantedNumber) {

    let counter = 0
    numbers.map(number => {
        if (Number(number.value) === Number(wantedNumber)) {

            counter = counter + 1
        }
    })

    return counter
}

export {checkNumbers,returnSum}
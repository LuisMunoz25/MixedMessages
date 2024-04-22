//Get a number from 0 -> num - 1
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['really bad luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go have ice cream', 'don\'t read this', 'play more', 'don\'t even trust your own shadow']
}

//Store the "random wisdom" generate in a new array
let givenWisdom = []

//Iterate over the collectiveWisdom object 
for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
}

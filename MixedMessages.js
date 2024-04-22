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

//Object's properties to be used to generate customized messages and being pushed to the givenWisdom array
switch(prop) {
    case 'signInfo':
        givenWisdom.push(`Your sign right now is "${collectiveWisdom[prop][optionIdx]}".`)
        break
    case 'fortuneOutput':
        givenWisdom.push(`You're having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
    case 'advice':
        givenWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
    default:
        givenWisdom.push("There is not enough info.")
}